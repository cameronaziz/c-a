const reactDocs = require('react-docgen');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const directory = '../src/components';
const output = '../docs/api';

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

const runnit = () => {
  walk(directory, (erro, files) => {
    files.forEach(file => {
      if (path.extname(file) === '.js' || path.extname(file) === '.jsx') {
        fs.readFile(file, 'utf-8', (error, src) => {
          if (error) {
            console.log('error', error);
            throw error;
          }
          let componentInfo;
          try {
            componentInfo = reactDocs.parse(src, reactDocs.resolver.findExportedComponentDefinition);
          } catch (e) {
            console.log('e', e);
            console.log('THROW ON THIS', src);
            // throw e;
          }
          console.log(componentInfo);
          if (componentInfo) {
            console.log(componentInfo);
            const nameArr = file.split('.');
            const name = nameArr[nameArr.length - 2];
            const fileArr = file.split('/');
            for (let i = 1; i < fileArr.length - 1; i += 1) {
              if (!fs.existsSync(fileArr[i])) {
                fs.mkdirSync(fileArr[i]);
              }
            }
            const data = JSON.stringify(componentInfo, null, 2)
              .replace(/"([^(")"]+)":/g, '$1:')
              .replace(/"/g, "'");
            const markdown = generateMarkdown.generate(data);
            fs.writeFile(`${output + name}.md`, markdown, writeErr => {
              if (writeErr) throw writeErr;
            });
          }
        });
      }
    });
  });
};

runnit();
