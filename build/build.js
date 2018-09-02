const fs = require('fs');
const path = require('path');
const format = require('./template');
const lucentFile = require('./lucentFile');

const directory = '../src/components';
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
  let results = [];
  fs.readdir(dir, (err, list) => {
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
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
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

const findDirs = async (list, directories, i) => {
  if (i === list.length) { return directories; }
  await fs.stat(list[i], (errorStat, stat) => {
    if (stat && stat.isDirectory()) {
      directories.push(list[i]);
    }
    findDirs(list, directories, i + 1);
  });
};

const createLucentDisplay = ({
  displayFile, constant, importName, destination, dir,
}) => {
  fs.exists(displayFile, (exists) => {
    if (exists) {
      fs.readFile(displayFile, 'utf-8', (error, displayFileSrc) => {
        const fileData = lucentFile.template(constant, importName, displayFileSrc);
        fs.writeFile(displayFile, fileData, (err) => {
          if (err) {
            return console.log(err);
          }
          // console.log(`The file ${destination} was saved!`);
          return null;
        });
      });
    } else {
      fs.readdir(dir, async (err, list) => {
        const directories = await findDirs(list, [], 0);
        console.log(directories);
        const fileData = lucentFile.template(constant, importName, false, directories);
        fs.writeFile(displayFile, fileData, (error) => {
          if (error) {
            return console.log(error);
          }
          // console.log(`The file ${displayFile} was saved!`);
          return null;
        });
      });
    }
  });
};

const readFileContents = (file) => new Promise((resolve, reject) => {
  fs.readFile(file, 'utf-8', async (error, src) => {
    if (error) {
      throw error;
    }
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
});

const writeFile = ({
  destination, data, filename, displayFile, dir,
}) => new Promise((resolve, reject) => {
  fs.writeFile(destination, data, (err) => {
    if (err) {
      return console.log(err);
    }
    // console.log(`The file ${destination} was saved!`);
    const fileImport = filename.split('.');
    let importName = filename;
    let constant = fileImport[0];
    if (constant.length === 0) {
      [, constant] = fileImport;
    }
    if (fileImport[1] === 'js') {
      [importName] = fileImport;
    }
    resolve({
      displayFile, constant, importName, destination, dir,
    });
  });
});


const build = async (files) => {
  await asyncForEach(files, async (file) => {
    const found = excluded.includes(path.extname(file)) ||
    excluded.includes(file) || excluded.includes(path.basename(file));
    if (!found) {
      await readFileContents(file).then((data) => {
        writeFile({ ...data }).then((datum) => {
          createLucentDisplay({ ...datum });
        });
      });
    }
  });
};

const runnit = () => {
  walk(directory, (erro, files) => {
    build(files);
  });
};

runnit();
