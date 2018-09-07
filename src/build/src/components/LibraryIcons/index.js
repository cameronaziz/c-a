const code = `export { default as node } from './Node';
export { default as react } from './React';
export { default as d3 } from './D3';
export { default as reactEmotion } from './Emotion';
export { default as svg } from './SVG';
export { default as Tour } from './Tour';
`;

const links = [
  {
    line: 1,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'Node.js',
    ],
  },
  {
    line: 2,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'React.js',
    ],
  },
  {
    line: 3,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'D3.js',
    ],
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'Emotion.js',
    ],
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'SVG.js',
    ],
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'LibraryIcons',
      'Tour.js',
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
