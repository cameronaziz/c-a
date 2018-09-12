import React, { Fragment } from 'react';
import { Hero, BigTitle, Subtitle } from '../styled';

const Header = () => (
  <Fragment>
    <Hero>
      <BigTitle>
        Hello. <br /> I&apos;m Cameron Aziz.
      </BigTitle>
      <Subtitle>
        I&apos;m a web engineer specializing in full stack Javascript applications. Like this one.
      </Subtitle>
    </Hero>
  </Fragment>
);

export default Header;
