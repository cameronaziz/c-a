const code = `import React from 'react';
import PropTypes from 'prop-types';

const calculateSize = size => {
  let calculatedSize = 500;
  if (!size) {
    return \`0 0 \${calculatedSize} \${calculatedSize}\`;
  }
  calculatedSize *= 1 / size;
  return \`0 0 \${calculatedSize} \${calculatedSize}\`;
};

const ClosedFolder = ({ size, fill }) => (
  <g transform={\`scale(\${size})\`} fill={fill}>
    <path
      d="M56.98,11.5H28.02V6.52c0-1.665-1.354-3.02-3.02-3.02H3.02C1.354,3.5,0,4.854,0,6.52V20.5v2v30.98
	c0,1.665,1.354,3.02,3.02,3.02H56.98c1.665,0,3.02-1.354,3.02-3.02V22.5v-2v-5.98C60,12.854,58.646,11.5,56.98,11.5z M58,53.48
	c0,0.563-0.457,1.02-1.02,1.02H3.02C2.457,54.5,2,54.043,2,53.48V22.5h56V53.48z M2,20.5V6.52C2,5.957,2.457,5.5,3.02,5.5H25
	c0.562,0,1.02,0.457,1.02,1.02v6.98H56.98c0.563,0,1.02,0.457,1.02,1.02v5.98H2z"
    />
  </g>
);

ClosedFolder.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

ClosedFolder.defaultProps = {
  size: undefined,
  fill: undefined,
};

export default ClosedFolder;
`;

const links = [];

const libraries = ['react','propTypes'];

export default {
  libraries,
  code,
  links,
  name: 'ClosedFolder.js',
  label: 'ClosedFolder.js',
};