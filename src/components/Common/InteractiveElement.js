import React from 'react';
import PropTypes from 'prop-types';

const InteractiveElement = ({
  children, onClick, onKeyPress, role, Element, tabIndex, style, ...rest
}) => {
  let click = onClick;
  if (typeof onClick === 'object') {
    click = () => { onClick.onClickFunction(onClick.parameters); };
  }
  return (
    <Element
      role={role || 'button'}
      tabIndex={tabIndex || -1}
      onKeyPress={onKeyPress || click}
      onClick={click}
      style={{ outline: 'none', ...style }}
      {...rest}
    >
      {children}
    </Element>
  );
};

InteractiveElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ onClickFunction: PropTypes.func }),
  ]).isRequired,
  onKeyPress: PropTypes.func,
  role: PropTypes.string,
  Element: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
};

InteractiveElement.defaultProps = {
  onKeyPress: undefined,
  role: undefined,
  tabIndex: undefined,
};

export default InteractiveElement;
