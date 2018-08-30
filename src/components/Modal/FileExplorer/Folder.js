import React from 'react';
import ClosedFolder from './ClosedFolder';
import OpenFolder from './OpenFolder';

const Folder = ({ isOpen }) => {
  if (isOpen) {
    return <OpenFolder />;
  }
  return <ClosedFolder />;
};

export default Folder;
