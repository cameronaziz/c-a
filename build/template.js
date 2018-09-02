const template = (code, name, links) => `const code = \`${code}\`;

const links = ${links};

export default {
  code,
  links,
  name: '${name}',
  label: '${name}',
};`;

module.exports = {
  template,
};
