const defaultExport = ['', 'export default [', '];'];

const directoryLines = (directories) => {
  const lines = [];
  if (!directories) { return lines ;}
  for (const directory of directories) {
    lines.push(`import ${directory} from './${directory}/lucentDisplay';`);
  }
  return lines;
};

const template = (constant, fileImport, displayFileSrc, directories) => {
  const newImport = `import ${constant} from './${fileImport}';`;
  const newExport = `  {
    ...${constant},
  },`;
  let dataArr = [newImport];
  if (displayFileSrc) {
    dataArr = displayFileSrc.split('\n');
    for (let i = 0; i < dataArr.length; i += 1) {
      if (!dataArr[i].startsWith('import')) {
        dataArr.splice(i, 0, newImport);
        break;
      }
    }
  }
  const exportArr = newExport.split('\n');
  if (!displayFileSrc) {
    const dirs = directoryLines(directories);
    if (dirs.length > 0) {
      dataArr = dataArr.concat(dirs);
    }
    dataArr = dataArr.concat(defaultExport);
  }
  dataArr.splice(dataArr.length - 1, 0, ...exportArr);
  const dataDone = dataArr.join('\n');
  return dataDone;
};

module.exports = {
  template,
};
