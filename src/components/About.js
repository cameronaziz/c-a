import React from 'react';
import { Content, Inner, Title, AboutDesc, AboutHero, Avatar, AboutSub } from './styled';
import avatar from '../images/avatar.png';

const About = () => (
  <Content speed={0.4} offset={2}>
    <Inner>
      <Title>About</Title>
      <AboutHero>
        <Avatar src={avatar} alt="Cameron Aziz" />
        <AboutSub>I'm a bomb dev.</AboutSub>
      </AboutHero>
      <AboutDesc>
        Lorem ipsum dolor amet jean shorts hammock flannel heirloom. Hot chicken PBR&B health goth, narwhal jean shorts
        four dollar toast plaid godard coloring book pitchfork 90's taiyaki meditation fanny pack. XOXO keytar sartorial
        bespoke forage. PBR&B meggings taiyaki vinyl.
      </AboutDesc>
    </Inner>
  </Content>
);

export default About;
