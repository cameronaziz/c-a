const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');
const format = require('./template');
const lucentFile = require('./lucentFile');

const directory = '../src/components';
const deleteable = '../output/src';
const output = '../output';

const excluded = [
  '.pdf',
  '.png',
  '.jpg',
  '.svg',
  '.DS_Store',
];

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const walk = (dir, done) => {
  let results = {
    files: [],
    directories: [],
  };
  fs.readdir(dir, (err, list) => {
    results.directories.push(dir);
    if (err) return done(err);
    let i = -1;
    (function next() {
      let file = list[i += 1];
      if (!file) return done(null, results);
      file = `${dir}/${file}`;
      fs.stat(file, (errorStat, stat) => {
        if (errorStat) {
          console.log(errorStat);
        }
        if (stat && stat.isDirectory()) {
          walk(file, (errorWalk, res) => {
            if (errorWalk) {
              console.log(errorWalk);
            }
            results = {
              files: results.files.concat(res.files),
              directories: results.directories.concat(res.directories),
            };
            next();
          });
        } else {
          results.files.push(file);
          next();
        }
      });
    }());
  });
};

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
    console.log(displayFile);
    fs.writeFileSync(displayFile, fileData);
  }
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

  for (let i = 0; i < dataArr.length - 1; i += 1) {
    if (dataArr[i].startsWith('import')) {
      const importModule = dataArr[i].split("'");
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
        links.push(link);
      }
    }
  }
  const filename = path.basename(file);
  const stringLinks = JSON.stringify(links, null, 2).replace(/"([^(")"]+)":/g, '$1:').replace(/"/g, "'");
  const data = format.template(source, filename, stringLinks);
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
}) => new Promise((resolve, reject) => {
  fs.writeFileSync(destination, data);
  // console.log(`The file ${destination} was saved!`);
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


const runnit = () => {
  const needsDelete = fs.existsSync(deleteable);
  if (needsDelete) {
    deleteFolderRecursive(deleteable);
  }
  walk(directory, (erro, files) => {
    build(files);
  });
};

runnit();
