
export const buildTree = (arr, index) => {
  if (typeof index !== 'undefined') {
    buildTree.index = index;
  }
  return arr.map(element => {
    // eslint-disable-next-line no-param-reassign
    buildTree.index += 1;
    if (!element.items) {
      return {
        elementIndex: buildTree.index,
        type: 'file',
        ...element,
      };
    }
    return {
      elementIndex: buildTree.index,
      label: element.label,
      children: buildTree(element.items),
      type: 'folder',
      isOpen: false,
      name: element.name,
    };
  });
};

const searchShortcuts = (tree, shortcuts, depth, paths) => {
  tree.map(element => {
    const shortcutArr = shortcuts.filter((e) => e.location[depth] === element.name);
    if (shortcutArr.length > 0) {
      for (const shortcut of shortcutArr) {
        if (depth === shortcut.location.length - 1) {
          paths.push({
            elementIndex: element.elementIndex,
            shortcut: shortcut.library,
          });
        }
      }
      if (element.children) {
        searchShortcuts(element.children, shortcuts, depth + 1, paths);
      }
    }
    return null;
  });
  return paths;
};

export const findShortcuts = (tree, shortcuts, depth) => {
  let paths = [];
  paths = searchShortcuts(tree, shortcuts, depth, paths);
  return paths;
};

export const findLink = (path, tree, index) => {
  const found = tree.find(element => element.name === path[index]);
  if (path.length === index + 1) {
    return found;
  }
  return findLink(path, found.children, index + 1);
};

export const recusiveOpen = (tree, index) => {
  for (let i = 0; i < tree.length; i += 1) {
    tree[i].offset = index;
    if (tree[i].isOpen && tree[i].children) {
      recusiveOpen(tree[i].children, index);
    }
  }
  return tree;
};


export const createLineStyle = (lineNumber, current, hoveredLine) => {
  const style = { fontSize: '12px', cursor: 'default' };
  if (hoveredLine === lineNumber && current.linkLines.includes(lineNumber)) {
    style.backgroundColor = '#eee';
    style.borderRadius = '3px';
    style.padding = '3px';
    style.margin = '-3px';
    style.cursor = 'pointer';
    style.textDecorationLine = 'underline';
  }
  return style;
};
