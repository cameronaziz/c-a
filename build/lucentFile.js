const defaultExport = ['', 'export default [', '];'];

const directoryLines = (directories) => {
  const importLines = [];
  const exportLines = [];
  if (!directories) { return importLines; }
  for (const directory of directories) {
    importLines.push(`import ${directory} from './${directory}/lucentDisplay';`);
    exportLines.push(`  {
    label: '${directory}',
    children: ${directory},
  },`);
  }
  return {
    importLines,
    exportLines,
  };
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
  let exportArr = newExport.split('\n');
  if (!displayFileSrc) {
    const { importLines, exportLines } = directoryLines(directories);
    if (importLines.length > 0) {
      dataArr = dataArr.concat(importLines);
      exportArr = exportArr.concat(exportLines);
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
