import React from 'react';
import PropTypes from 'prop-types';
import FileElement from './FileElement';

const FileExplorer = ({ current, tree, selectElement }) => {
  let currentElementIndex;
  if (current) {
    currentElementIndex = current.elementIndex;
  }
  return (
    <div style={{ marginTop: '10px', marginBottom: '5%' }}>
      <svg style={{ paddingBottom: '92%' }} width="100%">
        <g transform="translate(0, 10)">
          <FileElement
            currentElementIndex={currentElementIndex}
            tree={tree}
            depth={0}
            selectElement={selectElement}
          />
        </g>
      </svg>
    </div>
  );
};

FileExplorer.propTypes = {
  selectElement: PropTypes.func.isRequired,
  tree: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  current: PropTypes.shape({
    code: PropTypes.string,
  }),
};

FileExplorer.defaultProps = {
  current: undefined,
};

export default FileExplorer;
