const code = `export { default as About } from './About';
export { default as Contact } from './Contact';
export { default as Header } from './Header';
export { default as HoverCircle } from './HoverCircle';
export { default as transitionStyles } from './transitionStyles';`;

const links = [
  {
    line: 1,
    location: [
      'src',
      'components',
      'Sections',
      'About.js'
    ]
  },
  {
    line: 2,
    location: [
      'src',
      'components',
      'Sections',
      'Contact.js'
    ]
  },
  {
    line: 3,
    location: [
      'src',
      'components',
      'Sections',
      'Header.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'Sections',
      'HoverCircle.js'
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