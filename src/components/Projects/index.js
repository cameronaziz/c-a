import React, { Component } from 'react';

import ProjectCard from './ProjectCard';
import { Content, Inner, Title, ProjectsWrapper } from '../styled';
import projectList from '../../data/projectList';

import '../../styles/css/highlight.css';

class Projects extends Component {
  state = { anyHovered: false }

  hoverAny = () => {
    this.setState({
      anyHovered: true,
    });
  }

  render() {
    return (
      <Content speed={0.4} offset={1.3}>
        <Inner>
          <Title>Recent Projects</Title>
          <ProjectsWrapper>
            {projectList.map((project, index) => (
              <ProjectCard
                anyHovered={this.state.anyHovered}
                isUpcoming={this.props.isUpcoming}
                isFirst={index === 0}
                key={project.key}
                hoverAny={this.hoverAny}
                {...project}
              />
        ))}
          </ProjectsWrapper>
        </Inner>
      </Content>
    );
  }
}
export default Projects;
