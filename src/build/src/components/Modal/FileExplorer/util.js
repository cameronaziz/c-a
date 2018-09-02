const code = `export const calculateIconSize = size => {
  let calculatedSize = 500;
  if (!size) {
    return \`0 0 \${calculatedSize} \${calculatedSize}\`;
  }
  calculatedSize *= 1 / size;
  return \`0 0 \${calculatedSize} \${calculatedSize}\`;
};

export const childrenItems = element => element.children && element.type === 'folder' && element.isOpen;

export const findSelection = (currentPath, folderIndex) => {
  let childPath;
  let iconFill;
  let isSelected = false;
  switch (currentPath.length) {
    case 0:
      childPath = [];
      break;
    case 1:
      if (folderIndex === currentPath[0]) {
        isSelected = true;
        iconFill = 'white';
      }
      break;
    default:
      if (folderIndex === currentPath[0]) {
        childPath = currentPath.slice(1);
      } else {
        childPath = [];
      }
  }
  return {
    childPath, isSelected, iconFill,
  };
};
`;

const links = [];

export default {
  code,
  links,
  name: 'util.js',
  label: 'util.js',
};