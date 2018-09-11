import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ReactTooltip, { show, hide } from 'react-tooltip';
import { Transition } from 'react-transition-group';

import { Wrapper, Text, CardTitle, CardBackground } from '../styled';
import libraries from '../../data/libraries';

const duration = 600;

const defaultStyle = (isEven) => ({
  // transition: `translateX ${duration}ms ease-in-out, rotate ${duration}ms ease-in-out`,
  transform: `translateX(${isEven ? '-' : ''}400px) rotate(100deg)`,
});

const updatedStyles = {
  entering: { transform: 'translateX(0px) rotate(0deg)' },
  entered: { transform: 'translateX(0px) rotate(0deg)' },
};

class ProjectCard extends Component {
  state = {
    libraryText: undefined,
    bgImg: '',
  };

  tooltip = createRef();

  hoverItem = item => {
    this.props.hoverAny();
    this.hideTooltip();
    const libraryText = item.text || '';
    const bgImg = item.bgImg || '';
    this.setState({
      libraryText,
      bgImg,
    });
  };

  leaveItem = () => {
    this.setState({
      libraryText: undefined,
      bgImg: '',
    });
  };

  hideTooltip = () => {
    if (this.props.isFirst) {
      const tooltip = findDOMNode(this.tooltip.current);
      hide(tooltip);
    }
  }

  showTooltip = () => {
    if (this.props.isFirst) {
      const tooltip = findDOMNode(this.tooltip.current);
      show(tooltip);
    }
  }

  render() {
    const { libraryText, bgImg } = this.state;
    const {
      description, title, bg, tech, isFirst, isUpcoming, anyHovered, even,
    } = this.props;
    if (isUpcoming && !anyHovered) {
      setTimeout(() => {
        this.showTooltip();
        setTimeout(() => {
          this.hideTooltip();
        }, 4000);
      }, 6000);
    }
    const style = defaultStyle(even);
    return (
      <Transition in={isUpcoming} timeout={duration}>
        {(state) => (
          <Wrapper bg={bg} style={{ ...style, ...updatedStyles[state] }}>
            <CardBackground bg={bgImg} />
            <Text>{description}</Text>
            <CardTitle>{title}</CardTitle>
            <div style={{ position: 'relative' }} onMouseLeave={this.leaveItem}>
              {tech &&
            tech.map((item, index) => {
              const library = libraries.find(e => e.name === item.library);
              return (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onMouseEnter={() => {
                    this.hoverItem(library, item.example);
                  }}
                >
                  <img
                    ref={index === 0 && isFirst ? this.tooltip : undefined}
                    data-tip={index === 0 && isFirst && !anyHovered ? 'Hover icons to find out more' : undefined}
                    src={library.icon}
                    width="50px"
                    height="50px"
                    alt={library.name}
                  />
                </span>
              );
            })}
              <div style={{ height: '65px' }}>
                <Text>{libraryText}</Text>
              </div>
            </div>
            {isFirst && <ReactTooltip place="bottom" />}
          </Wrapper>
        )}
      </Transition>
    );
  }
}

ProjectCard.propTypes = {
  hoverAny: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.shape({
    library: PropTypes.string,
  })),
};

ProjectCard.defaultProps = {
  tech: undefined,
};

export default ProjectCard;
