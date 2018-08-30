import React, { Fragment } from 'react';

import ProjectCard from './ProjectCard';
import { Inner, Title, ProjectsWrapper } from './styled';

const projects = [
  {
    title: 'Any Game Tickets',
    bg: 'linear-gradient(to right, #145ad4 0%, #bad414 100%)',
    description: 'Develop event ticketing application by interfacing with APIs and rendering dynamic D3 SVGs.',
    tech: ['nodejs', 'redux', 'react', 'mongo', 'graphql', 'd3'],
  },
  {
    title: 'Precision Filter',
    bg: 'linear-gradient(to right, #d4145a 0%, #8e14d4 100%)',
    description: 'Engineer internal tool to recieve product pricing from vendors, place orders and track inventory.',
    tech: ['nodejs', 'react', 'redux', 'graphql', 'firebase'],
  },
  {
    title: 'Elevare',
    bg: 'linear-gradient(to right, #d48e14 0%, #d42e14 100%)',
    description:
      'Architect application to request data from APIs such as Facebook Graph, Google Analytics and Yelp Fusion.',
    tech: ['nodejs', 'react', 'mongo', 'apollo', 'graphql', 'd3'],
  },
  {
    title: 'Patient Pop',
    bg: 'linear-gradient(to right, #2ECC40 0%, #FCEE21 100%)',
    description: 'Design and engineer application to automate onboarding of new customers into AWS infrastructure.',
    tech: ['php', 'awscm', 'laravel'],
  },
];

const Projects = () => (
  <Fragment>
    <Inner>
      <Title>Recent Projects</Title>
      <ProjectsWrapper>
        {projects.map((project, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProjectCard key={index} {...project}>
            {project.description}
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </Inner>
  </Fragment>
);

export default Projects;
