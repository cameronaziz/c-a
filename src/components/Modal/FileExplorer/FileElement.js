import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const FileElement = ({
  tree, depth, selectElement, currentElementIndex, selectedPath,
}) => {
  let currentPath = [];
  if (selectedPath) {
    currentPath = selectedPath;
  }
  return (
    tree.map((element, index) => (
      <Item
        currentPath={currentPath}
        folderIndex={index}
        key={index}
        element={element}
        depth={depth}
        currentElementIndex={currentElementIndex}
        selectElement={selectElement}
      />
    ))
  );
};


FileElement.propTypes = {
  selectedPath: PropTypes.arrayOf(PropTypes.number),
  currentElementIndex: PropTypes.number,
  selectElement: PropTypes.func.isRequired,
};

FileElement.defaultProps = {
  selectedPath: undefined,
  currentElementIndex: undefined,
};

export default FileElement;
