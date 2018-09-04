const code = `export default {
  entering: {
    animationIterationCount: '0',
    left: '95%',
  },
  entered: {
    animationIterationCount: '0',
    left: '86%',
  },
  exited: {
    animationIterationCount: 'infinite',
    left: '95%',
  },
}`;

const links = [];

const libraries = [];

export default {
  libraries,
  code,
  links,
  name: 'transitionStyles.js',
  label: 'transitionStyles.js',
};