import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from '../styled';
import projectList from '../data/projectList';

import '../../styles/highlight.css';

const Projects = ({ toggleModal, setExample }) => (
  <Content speed={0.4} offset={1.3}>
    <Inner>
      <Title>Recent Projects</Title>
      <ProjectsWrapper>
        {projectList.map(project => (
          <ProjectCard key={project.key} toggleModal={toggleModal} setExample={setExample} {...project} />
        ))}
      </ProjectsWrapper>
    </Inner>
  </Content>
);

Projects.propTypes = {
  setExample: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Projects;
