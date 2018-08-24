import React, { Component } from 'react';
import PropTypes, { element } from 'prop-types';
import d3SVG from '../images/d3.svg';
import reactSVG from '../images/react.svg';
import graphQLSVG from '../images/graphQL.svg';
import php from '../images/php.svg';
import awscm from '../images/awscm.svg';
import mongo from '../images/mongo.svg';
import firebase from '../images/firebase.svg';
import laravel from '../images/laravel.svg';
import nodejs from '../images/nodejs.svg';

import { Wrapper, Text, CardTitle } from './styled';

const libaries = [
  {
    name: 'react',
    title: 'React',
    icon: reactSVG,
    text: 'React is a JavaScript library for building user interfaces developed by Facebook.',
  },
  {
    name: 'graphql',
    title: 'GraphQL',
    icon: graphQLSVG,
    text: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
  },
  {
    name: 'mongo',
    title: 'MongoDB',
    icon: mongo,
    text:
      'MongoDB is a document database with the scalability and flexibility with a data structure can be changed over time',
  },
  {
    name: 'd3',
    title: 'D3',
    icon: d3SVG,
    text: 'D3.js is a JavaScript library for manipulating documents based on data.',
  },
  {
    name: 'php',
    title: 'PHP',
    icon: php,
    text: 'PHP is a popular general-purpose scripting language that is especially suited to web development.',
  },
  {
    name: 'awscm',
    title: 'AWS Certificate Manager',
    icon: awscm,
    text:
      'AWS Certificate Manager is a service that lets you easily provision, manage, and deploy public and private SSL and TLS certificates',
  },
  {
    name: 'laravel',
    title: 'Laravel',
    icon: laravel,
    text: 'Laravel is a web application framework with expressive, elegant syntax.',
  },
  // {
  //   name: 'javascript',
  //   title: 'Javascript',
  //   icon: javascript,
  //   text: 'JavaScript is a scripting or programming language that allows you to implement complex things on web pages.',
  // },
  {
    name: 'nodejs',
    title: 'NodeJS',
    icon: nodejs,
    text: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    name: 'firebase',
    title: 'Firebase',
    icon: firebase,
    text:
      "Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business.",
  },
];

class ProjectCard extends Component {
  state = { libaryText: '' };

  hoverItem = item => {
    const libaryText = item.text || '';
    this.setState({
      libaryText,
    });
  };

  leaveItem = () => {
    this.setState({
      libaryText: '',
    });
  };

  render() {
    const { libaryText } = this.state;
    const { link, children, title, bg, tech } = this.props;
    return (
      <Wrapper href={link} rel="noopener noreferrer" bg={bg}>
        <Text>{children}</Text>
        <CardTitle>{title}</CardTitle>
        {tech &&
          tech.map(item => {
            const libary = libaries.find(e => e.name === item);
            return (
              <span
                onMouseEnter={() => {
                  this.hoverItem(libary);
                }}
                onMouseLeave={this.leaveItem}
              >
                <img src={libary.icon} width="50px" height="50px" alt={libary.name} />
              </span>
            );
          })}
        <div style={{ height: '18px' }}>
          <Text>{libaryText}</Text>
        </div>
      </Wrapper>
    );
  }
}
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
