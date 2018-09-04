const code = `export { default as File } from './File';
export { default as Folder } from './Folder';
`;

const links = [
  {
    line: 1,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Icons',
      'File.js'
    ]
  },
  {
    line: 2,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Icons',
      'Folder.js'
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