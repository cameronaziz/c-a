import FileElement from './FileElement';
import Icons from './Icons/lucentDisplay';
import Item from './Item';
import Rect from './Rect';
import index from './index';
import util from './util';

export default [
  {
    ...FileElement,
  },
  {
    label: 'Icons',
    children: Icons,
  },
  {
    ...Item,
  },
  {
    ...Rect,
  },
  {
    ...index,
  },
  {
    ...util,
  },
];