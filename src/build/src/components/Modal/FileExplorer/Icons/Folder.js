const code = `import React from 'react';
import PropTypes from 'prop-types';
import ClosedFolder from './ClosedFolder';
import OpenFolder from './OpenFolder';

const Folder = ({ isOpen, fill }) => {
  if (isOpen) {
    return <OpenFolder fill={fill} />;
  }
  return <ClosedFolder fill={fill} />;
};

Folder.propTypes = {
  isOpen: PropTypes.bool,
  fill: PropTypes.string,
};

Folder.defaultProps = {
  fill: undefined,
  isOpen: undefined,
};

export default Folder;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Icons',
      'ClosedFolder.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Icons',
      'OpenFolder.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'Folder.js',
  label: 'Folder.js',
};