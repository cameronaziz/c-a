import React from 'react';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from '../styled';
import projectList from '../../data/projectList';

import '../../styles/css/highlight.css';

const Projects = () => (
  <Content speed={0.4} offset={2}>
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
