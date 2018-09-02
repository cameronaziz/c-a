import React from 'react';
import PropTypes from 'prop-types';
import ClosedFolder from './ClosedFolder';
import OpenFolder from './OpenFolder';

const Folder = ({ isOpen }) => {
  if (isOpen) {
    return <OpenFolder />;
  }
  return <ClosedFolder />;
};

Folder.propTypes = {
  isOpen: PropTypes.bool,
};

Folder.defaultProps = {
  isOpen: undefined,
};

export default Folder;
