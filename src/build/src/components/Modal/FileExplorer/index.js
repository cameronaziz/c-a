const code = `import React from 'react';
import PropTypes from 'prop-types';
import FileElement from './FileElement';

const FileExplorer = ({ tree, selectElement, selectedPath }) => (
  <div style={{ marginTop: '10px', marginBottom: '5%', height: '100%' }}>
    <svg height="auto" width="100%">
      <g transform="translate(0, 10)">
        <FileElement
          selectedPath={selectedPath}
          tree={tree}
          depth={0}
          selectElement={selectElement}
        />
      </g>
    </svg>
  </div>
);

FileExplorer.propTypes = {
  selectElement: PropTypes.func.isRequired,
  tree: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedPath: PropTypes.arrayOf(PropTypes.number),
};

FileExplorer.defaultProps = {
  selectedPath: undefined,
};

export default FileExplorer;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'FileElement.js'
    ]
  }
];

const libraries = ['react','propTypes','svg'];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};