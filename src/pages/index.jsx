import React, { Fragment, Component } from 'react';
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

const routes = [
  {
    hash: '#projects',
    location: 1.2,
  },
  {
    hash: '#about',
    location: 2.4,
  },
  {
    hash: '#contact',
    location: 3,
  },
];

class Index extends Component {
  componentDidMount() {
    const { hash } = this.props.location;
    if (hash.startsWith('#')) {
      const route = routes.find(element => element.hash === hash);
      if (route) {
        this.scroll(route.location);
      }
    }
  }

  parallax = React.createRef();

  scroll = to => this.parallax.current.scrollTo(to);

  render() {
    return (
      <Fragment>
        <SEO />
        <Parallax ref={this.parallax} pages={4}>
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
  }
}

export default Index;
