import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const FileElement = ({
  tree, depth, selectElement, currentElementIndex,
}) =>
  tree.map((element) => {
    return (
      <Item
        key={element.elementIndex}
        element={element}
        depth={depth}
        currentElementIndex={currentElementIndex}
        selectElement={selectElement}
      />
    );
  });

FileElement.propTypes = {
  currentElementIndex: PropTypes.number,
  selectElement: PropTypes.func.isRequired,
};

FileElement.defaultProps = {
  currentElementIndex: undefined,
};

export default FileElement;
