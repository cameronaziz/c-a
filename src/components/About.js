import React from 'react';
import fileDownload from 'js-file-download';

import { Content, Inner, Title, AboutDesc, AboutHero, Avatar, AboutSub, AboutLink } from './styled';
import avatar from '../images/avatar.png';
import resume from '../../static/Cameron Aziz - Resume.pdf';

const downloadPDF = () => {
  fileDownload(resume, 'Cameron Aziz - Resume.pdf');
};

const About = () => (
  <Content speed={0.4} offset={2.8}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="Cameron Aziz" />
        <AboutSub>I like to code.</AboutSub>
      </AboutHero>
      <AboutLink>
        <a onClick={downloadPDF}>My resume</a>
      </AboutLink>
      <AboutDesc>
        My passion for open source technologies has allowed me to take products and applications from conception to
        production. I am a trusted communicator between technical and non-technical staff which allows me to architect
        solutions that are both rapid to deploy and easily scalable. I am a full stack engineer specializing in
        JavaScript. I have worked on devops, backend and frontend teams individually and I enjoy web technologies such
        as React and D3.
      </AboutDesc>
    </Inner>
  </Content>
);

export default About;
