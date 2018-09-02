import { fromJS } from 'immutable';

export const getParent = (tree, index) => {
  for (let i = 0; i < tree.length; i += 1) {
    if (tree[i].elementIndex > index) {
      return i - 1;
    }
  }
  return tree.length - 1;
};

export const findStatus = (path, tree) => {
  const immutableTree = fromJS(tree);
  const elementPath = [];
  for (let j = 0; j <= path.length - 1; j += 1) {
    elementPath.push(path[j]);
    elementPath.push('children');
  }
  elementPath.pop();
  return immutableTree.getIn([...elementPath, 'isOpen']);
};

export const findElement = (tree, index, path) => {
  const parent = getParent(tree, index);
  path.push(parent);
  if (tree[parent].elementIndex === index) {
    return {
      path,
    };
  } else if (tree[parent].children) {
    return findElement(tree[parent].children, index, path);
  }
  const found = tree.findIndex(element => element.elementIndex === index);
  path.push(found);
  return {
    path,
  };
};

export const calculateIconSize = size => {
  let calculatedSize = 500;
  if (!size) {
    return `0 0 ${calculatedSize} ${calculatedSize}`;
  }
  calculatedSize *= 1 / size;
  return `0 0 ${calculatedSize} ${calculatedSize}`;
};

export const childrenItems = element => element.children && element.isOpen;

export const getItemFill = (element, currentElementIndex) => {
  const iconFill = currentElementIndex === element.elementIndex ? 'white' : undefined;
  let highlightFill = '0,0,0,0';
  if (currentElementIndex === element.elementIndex) {
    highlightFill = '0,0,0,0.3';
  }
  return {
    iconFill,
    highlightFill,
  };
}
;