import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Text, CardTitle, CardBackground, CardButton, ButtonContainer } from '../styled';
import libraries from '../data/libraries';

class ProjectCard extends Component {
  state = {
    libraryText: undefined,
    bgImg: '',
    buttonText: '',
  };

  hoverItem = (item, example) => {
    const libraryText = item.text || '';
    const bgImg = item.bgImg || '';
    const buttonText = item.buttonText || '';
    this.setState({
      libraryText,
      bgImg,
      buttonText,
    });
    if (example) {
      this.props.setExample(example);
    }
  };

  leaveItem = () => {
    this.setState({
      libraryText: undefined,
      bgImg: '',
      buttonText: '',
    });
  };

  render() {
    const { libraryText, bgImg, buttonText } = this.state;
    const { description, title, bg, tech, toggleModal } = this.props;
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
                  <img src={library.icon} width="50px" height="50px" alt={library.name} />
                </span>
              );
            })}
          {libraryText && (
            <ButtonContainer>
              <CardButton onClick={toggleModal}>See {buttonText} Code</CardButton>
            </ButtonContainer>
          )}
          <div style={{ height: '25px' }}>
            <Text>{libraryText}</Text>
          </div>
        </div>
      </Wrapper>
    );
  }
}
export default ProjectCard;

ProjectCard.propTypes = {
  setExample: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      library: PropTypes.string,
    })
  ),
};

ProjectCard.defaultProps = {
  tech: undefined,
};
