import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Parallax } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import routes from './routes';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { DividerMiddle, Divider, Content } from '../components/styled';
import { HeaderSVG, MidSVG, LowerSVG, BottomSVG, FooterSVG } from '../components/SVG';
import '../styles/global';
import '../../tailwind.custom.css';

const findRoute = hash => {
  if (hash && hash.startsWith('#')) {
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
    ReactGA.initialize('UA-48396791-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
          <Divider speed={1} offset={0}>
            <HeaderSVG />
          </Divider>
          <Content speed={0.4} offset={0}>
            <Header />
          </Content>
          <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1.1} />
          <Content speed={0.4} offset={1.3}>
            <Projects />
          </Content>
          <Divider speed={0.1} offset={1}>
            <MidSVG />
          </Divider>
          <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={2} />
          <Divider speed={0.1} offset={2}>
            <LowerSVG />
          </Divider>
          <Content speed={0.4} offset={2.4}>
            <About />
          </Content>
          <Divider fill="#23262b" speed={0.2} offset={3}>
            <BottomSVG />
          </Divider>
          <Content speed={0.4} offset={3.2}>
            <Contact />
          </Content>
          <Divider speed={0.1} offset={3}>
            <FooterSVG />
          </Divider>
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
