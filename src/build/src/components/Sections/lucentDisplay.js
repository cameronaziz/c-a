import About from './About';
import Projects from './Projects/lucentDisplay';
import Contact from './Contact';
import Header from './Header';
import HoverCircle from './HoverCircle';
import index from './index';
import transitionStyles from './transitionStyles';
import util from './util';

export default [
  {
    ...About,
  },
  {
    label: 'Projects',
    children: Projects,
  },
  {
    ...Contact,
  },
  {
    ...Header,
  },
  {
    ...HoverCircle,
  },
  {
    ...index,
  },
  {
    ...transitionStyles,
  },
  {
    ...util,
  },
];