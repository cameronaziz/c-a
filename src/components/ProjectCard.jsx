import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { Wrapper, Text, CardTitle } from './styled';

const ProjectCard = ({ title, link, children, bg, tech }) => (
  <Wrapper href={link} rel="noopener noreferrer" bg={bg}>
    <Text>{children}</Text>
    <CardTitle>{title}</CardTitle>
    {tech &&
      tech.map(item => (
        <Fragment>
          <img data-tip={item.name} src={item.icon} width="50px" height="50px" alt={item.name} />
          <ReactTooltip place="top" type="dark" effect="float" />
        </Fragment>
      ))}
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

ProjectCard.defaultProps = {
  link: '#',
  tech: undefined,
};
