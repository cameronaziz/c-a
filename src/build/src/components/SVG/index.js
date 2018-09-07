const code = `export { default as HeaderSVG } from './HeaderSVG';
export { default as MidSVG } from './MidSVG';
export { default as BottomSVG } from './BottomSVG';
export { default as FooterSVG } from './FooterSVG';
export { default as LowerSVG } from './LowerSVG';
`;

const links = [
  {
    line: 1,
    location: [
      'src',
      'components',
      'SVG',
      'HeaderSVG.js',
    ],
  },
  {
    line: 2,
    location: [
      'src',
      'components',
      'SVG',
      'MidSVG.js',
    ],
  },
  {
    line: 3,
    location: [
      'src',
      'components',
      'SVG',
      'BottomSVG.js',
    ],
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'SVG',
      'FooterSVG.js',
    ],
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'SVG',
      'LowerSVG.js',
    ],
  },
];

const libraries = [];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};
