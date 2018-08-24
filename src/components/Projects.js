import React from 'react';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from './styled';
import d3SVG from '../images/d3.svg';
import reactSVG from '../images/react.svg';
import graphQLSVG from '../images/graphQL.svg';
import php from '../images/php.svg';
import awscm from '../images/awscm.svg';
import mongo from '../images/mongo.svg';
import firebase from '../images/firebase.svg';

const projects = [
  {
    title: 'Elevare',
    bg: 'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
    description:
      'Architect application to request data from APIs such as Facebook Graph, Google Analytics and Yelp Fusion.',
    tech: [
      {
        icon: reactSVG,
        name: 'React',
      },
      {
        icon: graphQLSVG,
        name: 'GraphQL',
      },
      {
        icon: mongo,
        name: 'MongoDB',
      },
      {
        icon: d3SVG,
        name: 'D3',
      },
    ],
  },
  {
    title: 'Patient Pop',
    bg: 'linear-gradient(to right, #662D8C 0%, #ED1E79 100%)',
    description: 'Automate onboarding of new customers into AWS infrastructure',
    tech: [
      {
        icon: php,
        name: 'PHP',
      },
      {
        icon: awscm,
        name: 'AWS Certificate Manager',
      },
    ],
  },
  {
    title: 'Any Game Tickets',
    bg: 'linear-gradient(to right, #009245 0%, #FCEE21 100%)',
    description: 'Develop ticking application by interfacing with APIs and rendering dynamic D3 SVGs',
    tech: [
      {
        icon: reactSVG,
        name: 'React',
      },
      {
        icon: graphQLSVG,
        name: 'GraphQL',
      },
      {
        icon: mongo,
        name: 'MongoDB',
      },
      {
        icon: d3SVG,
        name: 'D3',
      },
    ],
  },
  {
    title: 'Precision Filter Products',
    bg: 'linear-gradient(to right, #D585FF 0%, #00FFEE 100%)',
    description:
      'Engineer internal tool to recieve products and pricing from vendor APIs.',
    tech: [
      {
        icon: reactSVG,
        name: 'React',
      },
      {
        icon: graphQLSVG,
        name: 'GraphQL',
      },
      {
        icon: firebase,
        name: 'Firebase',
      },
    ],
  },
];

const Projects = () => (
  <Content speed={0.4} offset={1}>
    <Inner>
      <Title>Projects</Title>
      <ProjectsWrapper>
        {projects.map(project => (
          <ProjectCard {...project}>{project.description}</ProjectCard>
        ))}
      </ProjectsWrapper>
    </Inner>
  </Content>
);

export default Projects;
