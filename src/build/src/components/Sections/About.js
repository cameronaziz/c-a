const code = `import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Document } from 'react-pdf';

import { Inner, Title, AboutDesc, AboutHero, Avatar, AboutSub, AboutLink } from '../styled';
import avatar from '../../images/avatar.png';
// import resume from '../../../static/Cameron Aziz - Resume.pdf';
import InteractiveElement from '../Common/InteractiveElement';

const About = ({ toggleModal }) => (
  <Fragment>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="Cameron Aziz" />
        <AboutSub>
          I like to code.{' '}
          <InteractiveElement style={{ outline: 'none' }} Element="a" onClick={toggleModal}>
            See code for this site?
          </InteractiveElement>
        </AboutSub>
      </AboutHero>
      <AboutLink>
        {/* <InteractiveElement style={{ outline: 'none' }} Element="a" onClick={downloadPDF}>
          My resume
        </InteractiveElement> */}
      </AboutLink>
      <AboutDesc>
        My passion for open source technologies has allowed me to take products and applications from conception to
        production. I am a trusted communicator between technical and non-technical staff which allows me to architect
        solutions that are both rapid to deploy and easily scalable. I am a full stack engineer specializing in
        JavaScript. I have worked on devops, backend and frontend teams individually and I enjoy web technologies such
        as React and D3.
      </AboutDesc>
    </Inner>
  </Fragment>
);

About.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default About;
`;

const links = [
  {
    line: 5,
    location: [
      'src',
      'components',
      'styled.js',
    ],
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'avatar.png',
    ],
  },
  {
    line: 8,
    location: [
      'src',
      'components',
      'InteractiveElement.js',
    ],
  },
];

const libraries = ['react', 'propTypes'];

export default {
  libraries,
  code,
  links,
  name: 'About.js',
  label: 'About.js',
};
