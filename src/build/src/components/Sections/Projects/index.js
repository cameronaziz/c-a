const code = `import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from '../../styled';
import projectList from '../../../data/projectList';
import '../../../styles/css/highlight.css';

class Projects extends Component {
  render() {
    return (
      <Content speed={0.4} offset={1.3}>
        <Inner>
          <Title>Recent Projects</Title>
          <ProjectsWrapper>
            {projectList.map((project, index) => (
              <ProjectCard
                even={index % 2 === 0}
                isFirst={index === 0}
                key={project.key}
                {...project}
                {...this.props}
              />
        ))}
          </ProjectsWrapper>
        </Inner>
      </Content>
    );
  }
}
export default Projects;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Sections',
      'Projects',
      'ProjectCard.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'Sections',
      'styled.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'Sections',
      'projectList.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'Sections',
      'highlight.css'
    ]
  }
];

const libraries = ['react'];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};