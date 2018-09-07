import styled from './styled';
import Common from './Common/lucentDisplay';
import LibraryIcons from './LibraryIcons/lucentDisplay';
import Modal from './Modal/lucentDisplay';
import Projects from './Projects/lucentDisplay';
import SEO from './SEO/lucentDisplay';
import SVG from './SVG/lucentDisplay';
import Sections from './Sections/lucentDisplay';

export default [
  {
    ...styled,
  },
  {
    label: 'Common',
    children: Common,
  },
  {
    label: 'LibraryIcons',
    children: LibraryIcons,
  },
  {
    label: 'Modal',
    children: Modal,
  },
  {
    label: 'Projects',
    children: Projects,
  },
  {
    label: 'SEO',
    children: SEO,
  },
  {
    label: 'SVG',
    children: SVG,
  },
  {
    label: 'Sections',
    children: Sections,
  },
];
