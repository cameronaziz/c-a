import LibraryLinks from './LibraryLinks';
import Buttons from './Buttons/lucentDisplay';
import CodeExplorer from './CodeExplorer/lucentDisplay';
import FileExplorer from './FileExplorer/lucentDisplay';
import WhyNotification from './WhyNotification';
import index from './index';
import styled from './styled';
import util from './util';

export default [
  {
    ...LibraryLinks,
  },
  {
    label: 'Buttons',
    children: Buttons,
  },
  {
    label: 'CodeExplorer',
    children: CodeExplorer,
  },
  {
    label: 'FileExplorer',
    children: FileExplorer,
  },
  {
    ...WhyNotification,
  },
  {
    ...index,
  },
  {
    ...styled,
  },
  {
    ...util,
  },
];
