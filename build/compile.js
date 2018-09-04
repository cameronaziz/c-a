const fs = require('fs');
const path = require('path');
const format = require('./template');
const lucentFile = require('./lucentFile');

const directory = '../src/components';
const deleteable = '../src/build/src';
const output = '../src/build';

const excluded = [
  '.pdf',
  '.png',
  '.jpg',
  '.svg',
  '.DS_Store',
];

const libraries = [
  'react',
];

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const linkFile = (importModule, fileArr) => {
  if (importModule[0].startsWith('..')) {
    fileArr = fileArr.slice(0, -1);
    importModule = importModule.slice(1);
    linkFile(importModule, fileArr);
  }
  return fileArr;
};

const findDirs = (dir, list, directories, i) => {
  if (list.length == i) { return directories; }
  const file = `${dir}/${list[i]}`;
  const stat = fs.statSync(file);
  if (stat && stat.isDirectory()) {
    directories.push(list[i]);
  }
  findDirs(dir, list, directories, i + 1);
  return directories;
};

const createLucentDisplay = ({
  displayFile, constant, importName, dir,
}) => {
  const exists = fs.existsSync(displayFile);
  if (exists) {
    const displayFileSrc = fs.readFileSync(displayFile, 'utf-8');
    const fileData = lucentFile.template(constant, importName, displayFileSrc);
    fs.writeFileSync(displayFile, fileData);
  } else {
    const list = fs.readdirSync(dir);
    const directories = findDirs(dir, list, [], 0);
    const fileData = lucentFile.template(constant, importName, false, directories);
    fs.writeFileSync(displayFile, fileData);
  }
};

const camelCase = (input) => input.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());


const findFileLiraries = (dataArr) => {
  const fileLiraries = [];
  for (const line of dataArr) {
    if (line.startsWith('import')) {
      const element = line.split("'")[1];
      if (!element.startsWith('.')) {
        fileLiraries.push(camelCase(element));
      }
    }
    if (line.includes('<svg')) {
      fileLiraries.push(camelCase('svg'));
    }
  }
  return fileLiraries;
};

const findLink = (importModule, i, fileArr) => {
  if (importModule[1].startsWith('.')) {
    const link = {
      line: i + 1,
    };
    const importArr = importModule[1].split('/');
    let fileName = importArr[importArr.length - 1];
    const ext = fileName.split('.');
    if (!ext[1]) {
      fileName = `${fileName}.js`;
    }
    const arr = fileArr.slice(0, -1);
    const location = linkFile(importArr, arr);
    location.push(fileName);
    link.location = location;
    return link;
  }
  return undefined;
};

const readFileContents = (file) => new Promise((resolve, reject) => {
  const src = fs.readFileSync(file, 'utf-8');
  const fileArr = file.split('/').slice(1);
  let dir = output;
  for (let i = 0; i < fileArr.length - 1; i += 1) {
    dir = `${dir}/${fileArr[i]}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  }
  const links = [];
  const dataArr = src.split('\n');
  const dolla = /\${/g;
  const backTick = /`/g;
  const source = src.replace(dolla, '\\${').replace(backTick, '\\`');

  const librariesInFile = findFileLiraries(dataArr);

  for (let i = 0; i < dataArr.length - 1; i += 1) {
    const importModule = dataArr[i].split("'");
    if (dataArr[i].startsWith('import')) {
      const link = findLink(importModule, i, fileArr);
      if (link) {
        links.push(link);
      }
    }
    if (dataArr[i].startsWith('export') && importModule[1] && importModule[1].startsWith('.')) {
      const exportLink = findLink(importModule, i, fileArr);
      if (exportLink) {
        links.push(exportLink);
      }
    }
  }
  const filename = path.basename(file);
  const stringLinks = JSON.stringify(links, null, 2).replace(/"([^(")"]+)":/g, '$1:').replace(/"/g, "'");
  const data = format.template(source, filename, stringLinks, JSON.stringify(librariesInFile).replace(/"/g, "'"));
  const destination = `${dir}/${filename}`;
  const displayFile = `${dir}/lucentDisplay.js`;
  resolve({
    data,
    destination,
    displayFile,
    filename,
    dir,
  });
});

const writeFile = ({
  destination, data, filename, displayFile, dir,
}) => new Promise((resolve) => {
  fs.writeFileSync(destination, data);
  const fileImport = filename.split('.');
  let importName = filename;
  let constant = fileImport[0];
  if (constant.length === 0) {
    [, constant] = fileImport;
  }
  if (fileImport[1] === 'js' || fileImport[1] === 'jsx') {
    [importName] = fileImport;
  }
  resolve({
    displayFile, constant, importName, destination, dir,
  });
});

const build = async (files) => {
  const returnData = [];
  await asyncForEach(files.files, async (file) => {
    const found = excluded.includes(path.extname(file)) ||
    excluded.includes(file) || excluded.includes(path.basename(file));
    if (!found) {
      readFileContents(file).then((data) => {
        writeFile({ ...data }).then((datum) => {
          returnData.push(datum);
        });
      });
    }
  });
  for (const newData of returnData) {
    createLucentDisplay({ ...newData });
  }
  return returnData;
};

const deleteFolderRecursive = (pathName) => {
  let files = [];
  if (fs.existsSync(pathName)) {
    files = fs.readdirSync(pathName);
    files.forEach(file => {
      const curPath = `${pathName}/${file}`;
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(pathName);
  }
};

const getContents = (dir, results) => {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const filename = `${dir}/${item}`;
    const stat = fs.statSync(filename);
    if (stat && stat.isDirectory()) {
      results.directories.push(filename);
      getContents(filename, results);
    } else {
      results.files.push(filename);
    }
  }
  return results;
};

const runnit = () => {
  const needsDelete = fs.existsSync(deleteable);
  if (needsDelete) {
    deleteFolderRecursive(deleteable);
  }
  const results = {
    files: [],
    directories: [],
  };
  const elements = getContents(directory, results);
  build(elements);
};

runnit();
