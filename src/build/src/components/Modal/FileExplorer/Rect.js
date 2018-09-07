const code = `import React from 'react';
import PropTypes from 'prop-types';

const Rect = ({ fill }) => (
  <rect
    transform="translate(0,-2)"
    x="0"
    y="0"
    width="calc(100% + 10)"
    height="20px"
    fill={\`rgba(\${fill})\`}
  />
);

Rect.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default Rect;
`;

const links = [];

const libraries = ['react', 'propTypes'];

export default {
  libraries,
  code,
  links,
  name: 'Rect.js',
  label: 'Rect.js',
};
