const code = `import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Text, CardTitle, CardBackground } from '../styled';
import libraries from '../../data/libraries';

class ProjectCard extends Component {
  state = {
    libraryText: undefined,
    bgImg: '',
  };

  hoverItem = item => {
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

  render() {
    const { libraryText, bgImg } = this.state;
    const {
      description, title, bg, tech,
    } = this.props;
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
          <div style={{ height: '65px' }}>
            <Text>{libraryText}</Text>
          </div>
        </div>
      </Wrapper>
    );
  }
}

ProjectCard.propTypes = {
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
`;

const links = [
  {
    line: 4,
    location: [
      'src',
      'components',
      'styled.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'libraries.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'ProjectCard.jsx',
  label: 'ProjectCard.jsx',
};