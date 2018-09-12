const code = `export { default as CloseButton } from './CloseButton';
export { default as BackButton } from './BackButton';
`;

const links = [
  {
    line: 1,
    location: [
      'src',
      'components',
      'Modal',
      'Buttons',
      'CloseButton.js'
    ]
  },
  {
    line: 2,
    location: [
      'src',
      'components',
      'Modal',
      'Buttons',
      'BackButton.js'
    ]
  }
];

const libraries = [];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};