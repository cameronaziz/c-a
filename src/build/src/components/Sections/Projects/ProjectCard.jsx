const code = `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { Wrapper, Text, CardTitle } from '../../styled';
import libraries from '../../../data/libraries';
import { calculatePercent, defaultStyle } from '../util';
import LibraryIcon from './LibraryIcon';

class ProjectCard extends Component {
  state = {
    libraryText: undefined,
  };

  hoverItem = item => {
    this.props.hoverLibraryIcon();
    const libraryText = item.text || '';
    this.setState({
      libraryText,
    });
  };

  leaveItem = () => {
    this.setState({
      libraryText: undefined,
    });
  };

  render() {
    const { libraryText } = this.state;
    const {
      description,
      title,
      bg,
      tech,
      isFirst,
      projectsScroll,
      even,
      projectsViewed,
      libraryIconHovered,
    } = this.props;
    const remainingPercent = calculatePercent(projectsScroll - 200, projectsViewed);
    const style = !projectsViewed ? defaultStyle(even, remainingPercent) : undefined;
    console.log(remainingPercent, style);
    return (
      <Wrapper bg={bg} style={style}>
        <Text>{description}</Text>
        <CardTitle>{title}</CardTitle>
        <div style={{ position: 'relative' }} onMouseLeave={this.leaveItem}>
          {tech &&
            tech.map((item, index) => {
              const library = libraries.find(e => e.name === item.library);
              return (
                <LibraryIcon
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  trigger={remainingPercent === 0 && isFirst}
                  hoverItem={this.hoverItem}
                  library={library}
                  isFirst={isFirst && index === 0}
                  anyHovered={libraryIconHovered}
                />
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
  projectsViewed: PropTypes.bool.isRequired,
  hoverLibraryIcon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(PropTypes.shape({
    library: PropTypes.string,
  })),
  isFirst: PropTypes.bool.isRequired,
  projectsScroll: PropTypes.number.isRequired,
  libraryIconHovered: PropTypes.bool.isRequired,
  even: PropTypes.bool.isRequired,
};

ProjectCard.defaultProps = {
  tech: undefined,
};

export default ProjectCard;
`;

const links = [
  {
    line: 5,
    location: [
      'src',
      'components',
      'Sections',
      'styled.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'Sections',
      'libraries.js'
    ]
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'Sections',
      'util.js'
    ]
  },
  {
    line: 8,
    location: [
      'src',
      'components',
      'Sections',
      'Projects',
      'LibraryIcon.js'
    ]
  }
];

const libraries = ['react','propTypes','reactTooltip'];

export default {
  libraries,
  code,
  links,
  name: 'ProjectCard.jsx',
  label: 'ProjectCard.jsx',
};