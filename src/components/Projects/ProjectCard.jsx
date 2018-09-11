import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import ReactTooltip, { show, hide } from 'react-tooltip';

import { Wrapper, Text, CardTitle, CardBackground } from '../styled';
import libraries from '../../data/libraries';

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
      description, title, bg, tech, isFirst, isUpcoming, anyHovered,
    } = this.props;
    if (isUpcoming && !anyHovered) {
      setTimeout(() => {
        this.showTooltip();
        setTimeout(() => {
          this.hideTooltip();
        }, 4000);
      }, 6000);
    }
    return (
      <Wrapper bg={bg}>
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
