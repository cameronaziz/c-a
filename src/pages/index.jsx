import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
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
    title: 'Projects',
  },
  {
    hash: '#about',
    location: 2.7,
    title: 'About',
  },
  {
    hash: '#contact',
    location: 3,
    title: 'Contact',
  },
];

const findRoute = hash => {
  if (hash.startsWith('#')) {
    const route = routes.find(element => element.hash === hash);
    if (route) {
      return route;
    }
  }
  return undefined;
};

class Index extends Component {
  state = { title: '' };

  componentWillMount() {
    const { hash } = this.props.location;
    const route = findRoute(hash);
    if (route) {
      this.setState({
        title: `${route.title} - `,
      });
    }
  }

  componentDidMount() {
    const { hash } = this.props.location;
    const route = findRoute(hash);
    if (route) {
      this.scroll(route.location);
    }
  }

  parallax = React.createRef();

  scroll = to => this.parallax.current.scrollTo(to);

  render() {
    const { title } = this.state;
    return (
      <Fragment>
        <SEO title={title} />
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

Index.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default Index;
