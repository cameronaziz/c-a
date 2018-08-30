import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Folder from './Folder';
import File from './File';

const FileElement = ({ tree, depth, selectElement }) =>
  tree.map((element, index) => (
    <Fragment key={index}>
      <g>
        <g transform={`translate(${depth * 20},${20 * element.offset})`}>
          <g pointerEvents="all" onClick={() => selectElement(element.elementIndex)}>
            {element.type === 'file' ? <File size={0.8} /> : <Folder isOpen={element.isOpen} size={0.8} />}
            <text transform="translate(40,0)" alignmentBaseline="hanging">
              {element.label}
            </text>
          </g>
        </g>
        {element.children &&
          element.isOpen && <FileElement tree={element.children} depth={depth + 1} selectElement={selectElement} />}
      </g>
    </Fragment>
  ));

FileElement.propTypes = {
  selectElement: PropTypes.func.isRequired,
};

export default FileElement;
