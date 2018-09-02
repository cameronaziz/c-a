const code = `import React from 'react';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from '../styled';
import projectList from '../../data/projectList';

import '../../styles/css/highlight.css';

const Projects = () => (
  <Content speed={0.4} offset={1.3}>
    <Inner>
      <Title>Recent Projects</Title>
      <ProjectsWrapper>
        {projectList.map(project => (
          <ProjectCard key={project.key} {...project} />
        ))}
      </ProjectsWrapper>
    </Inner>
  </Content>
);

export default Projects;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Projects',
      'ProjectCard.js'
    ]
  },
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
      'projectList.js'
    ]
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'highlight.css'
    ]
  }
];

export default {
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};