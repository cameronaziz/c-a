import React from 'react';
import { Content, Hero, BigTitle, Subtitle } from './styled';

const Header = () => (
  <Content speed={0.4} offset={0}>
    <Hero>
      <BigTitle>
        Hello, <br /> I'm Cameron Aziz.
      </BigTitle>
      <Subtitle>I'm a web engineer specializing in full stack Javascript applications.</Subtitle>
    </Hero>
  </Content>
);

export default Header;
