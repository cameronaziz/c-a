const code = `import React from 'react';
import PropTypes from 'prop-types';

const InteractiveElement = ({
  children, onClick, onKeyPress, role, Element, tabIndex, style, ...rest
}) => (
  <Element
    role={role || 'button'}
    tabIndex={tabIndex || -1}
    onKeyPress={onKeyPress || onClick}
    onClick={onClick}
    style={{ outline: 'none', ...style }}
    {...rest}
  >
    {children}
  </Element>
);

InteractiveElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  role: PropTypes.string,
  Element: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
};

InteractiveElement.defaultProps = {
  onClick: () => {},
  onKeyPress: undefined,
  role: undefined,
  tabIndex: undefined,
};

export default InteractiveElement;
`;

const links = [];

export default {
  code,
  links,
  name: 'InteractiveElement.js',
  label: 'InteractiveElement.js',
};