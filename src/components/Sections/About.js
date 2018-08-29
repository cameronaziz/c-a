import React from 'react';

import { Content, Inner, Title, AboutDesc, AboutHero, Avatar, AboutSub } from '../styled';
import avatar from '../../images/avatar.png';
import resume from '../../../static/Cameron Aziz - Resume.pdf';

const About = () => (
  <Content speed={0.4} offset={2.5}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="Cameron Aziz" />
        <AboutSub>I like to code.</AboutSub>
      </AboutHero>
      <AboutDesc>
        My passions for open source technologies have allowed me to take from conception to production. I am a trusted
        communicator between technical and non-technical staff so that I can architect solutions that are both rapid to
        deploy and easily scalable.
      </AboutDesc>
      <AboutDesc>
        <a
          style={{
            color: 'inherit',
            textDecoration: 'inherit',
          }}
          href={resume}
          download
        >
          Click to get my resume.
        </a>
      </AboutDesc>
    </Inner>
  </Content>
);

export default About;
