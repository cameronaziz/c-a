const code = `import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { width as twWidth } from '../../../tailwind';
import icons from './icons';

const Wrapper = styled.svg\`
  \${tw('stroke-current absolute')};
  color: \${props => props.stroke};
  width: \${props => props.svgWidth};
  fill: \${props => props.fill};
  left: \${props => props.left};
  top: \${props => props.top};
\`;

const SVG = ({
  stroke, fill, width, icon, left, top, className,
}) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[\`\${width}\`]}
    left={left}
    top={top}
    className={className}
  >
    {icons[icon].shape}
  </Wrapper>
);

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['triangle', 'circle', 'arrowUp', 'upDown', 'box', 'hexa']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
};

export default SVG;
`;

const links = [
  {
    line: 4,
    location: [
      'src',
      'components',
      'tailwind.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'SVG',
      'icons.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'SVG.jsx',
  label: 'SVG.jsx',
};