const template = (code, name, links, libraries) => `const code = \`${code}\`;

const links = ${links};

const libraries = ${libraries};

export default {
  libraries,
  code,
  links,
  name: '${name}',
  label: '${name}',
};`;

module.exports = {
  template,
};
