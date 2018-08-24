import React, { Fragment } from 'react';
import { Parallax } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { DividerMiddle } from '../components/styled';
import { HeaderSVG, MidSVG, BottomSVG, FooterSVG } from '../components/SVG';
import '../styles/global';
import '../../tailwind.custom.css';

const Index = () => (
  <Fragment>
    <SEO />
    <Parallax pages={4}>
      <HeaderSVG />
      <Header />
      <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1.1} />
      <Projects />
      <MidSVG />
      <About />
      <BottomSVG />
      <Contact />
      <FooterSVG />
    </Parallax>
  </Fragment>
);

export default Index;
