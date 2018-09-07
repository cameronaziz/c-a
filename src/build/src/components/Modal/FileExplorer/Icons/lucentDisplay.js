import ClosedFolder from './ClosedFolder';
import File from './File';
import Folder from './Folder';
import OpenFolder from './OpenFolder';
import index from './index';

export default [
  {
    ...ClosedFolder,
  },
  {
    ...File,
  },
  {
    ...Folder,
  },
  {
    ...OpenFolder,
  },
  {
    ...index,
  },
];
