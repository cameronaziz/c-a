const code = `import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { show, hide } from 'react-tooltip';

class LibraryIcon extends Component {
  state = { willUnmount: false }

  componentWillUnmount() {
    this.setState({
      willUnmount: true,
    });
  }

  tooltip = createRef();

  hideTooltip = () => {
    hide(this.tooltip.current);
  }

  showTooltip = () => {
    show(this.tooltip.current);
  }

  hoverItem = () => {
    const { hoverItem, library } = this.props;
    hoverItem(library);
  }

  toggleTooltip = () => {
    const {
      isFirst, anyHovered, trigger,
    } = this.props;
    const { willUnmount } = this.state;
    if (anyHovered) {
      this.hideTooltip();
    }
    if (trigger && isFirst) {
      setTimeout(() => {
        if (!anyHovered && !willUnmount) {
          this.showTooltip();
          setTimeout(() => {
            if (!willUnmount) {
              this.hideTooltip();
            }
          }, 4000);
        }
      }, 6000);
    }
  }

  render() {
    const {
      library, isFirst, anyHovered,
    } = this.props;
    return (
      <span onMouseEnter={this.hoverItem}>
        <img
          ref={isFirst ? this.tooltip : undefined}
          data-tip={isFirst && !anyHovered ? 'Hover icons to find out more' : undefined}
          src={library.icon}
          width="50px"
          height="50px"
          alt={library.name}
        />
      </span>
    );
  }
}

LibraryIcon.propTypes = {
  hoverItem: PropTypes.func.isRequired,
  library: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  isFirst: PropTypes.bool.isRequired,
  anyHovered: PropTypes.bool.isRequired,
  trigger: PropTypes.bool.isRequired,
};

export default LibraryIcon;
`;

const links = [];

const libraries = ['react','propTypes','reactTooltip'];

export default {
  libraries,
  code,
  links,
  name: 'LibraryIcon.js',
  label: 'LibraryIcon.js',
};