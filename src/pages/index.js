import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Parallax } from 'react-spring';
import 'typeface-cantata-one'; // eslint-disable-line import/extensions
import 'typeface-open-sans'; // eslint-disable-line import/extensions

import findRoute from '../routes';
import dataInput from '../build';
import SEO from '../components/SEO';
import Modal from '../components/Modal';
import Projects from '../components/Projects';
import { Header, About, Contact, HoverCircle, transitionStyles } from '../components/Sections';
import { DividerMiddle, Divider, Content } from '../components/styled';
import { HeaderSVG, MidSVG, LowerSVG, BottomSVG, FooterSVG } from '../components/SVG';
import '../styles/global';
import '../../tailwind.custom.css';
import InteractiveElement from '../components/Common/InteractiveElement';

/**
 * The homepage of the application.
 *
 * @class Index
 */

class Index extends Component {
  state = {
    title: '',
    modalVisible: false,
    modalData: undefined,
    transitionStyles,
    friction: 26,
  };

  componentWillMount() {
    const { hash } = this.props.location;
    const route = findRoute(hash);
    if (dataInput) {
      this.setState({
        modalData: dataInput,
      });
    }
    if (route) {
      this.setState({
        title: `${route.title} - `,
      });
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV !== 'development') {
      ReactGA.initialize('UA-48396791-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    const { hash } = this.props.location;
    const route = findRoute(hash);
    if (route) {
      this.scroll(route.location);
    }
  }

  toggleModal = () => {
    this.stopHoverCircleShaking();
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  parallax = React.createRef();

  scroll = to => this.parallax.current.scrollTo(to);

  viewCode = () => {
    this.scroll(1.15);
    this.toggleModal();
    this.stopHoverCircleShaking();
  }

  stopHoverCircleShaking = () => {
    this.setState(prevState => {
      prevState.friction = 100;
      prevState.transitionStyles.exited.animationIterationCount = '0';
      return prevState;
    });
    this.setState({
      friction: 26,
    });
  }

  render() {
    const {
      title, modalVisible, modalData, friction,
    } = this.state;
    return (
      <Fragment>
        <SEO title={title} />
        <Parallax config={{ friction }} ref={this.parallax} pages={5}>
          <Divider speed={1} offset={0}>
            <HeaderSVG />
          </Divider>
          <Content speed={0.4} offset={0}>
            {/* <HoverCircle viewCode={this.viewCode} transitionStyles={this.state.transitionStyles} stopShaking={this.stopHoverCircleShaking} /> */}
            <Header />
          </Content>
          <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1.1} />
          {/* <Content speed={0.4} offset={0.8}> */}
          <Projects />
          {/* </Content> */}
          <Divider speed={0.1} offset={1}>
            <MidSVG />
          </Divider>
          <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={2} />
          <Divider speed={0.1} offset={2}>
            <LowerSVG />
          </Divider>
          <Content speed={0.4} offset={3.8}>
            <About toggleModal={this.toggleModal} />
          </Content>
          <Divider fill="#23262b" speed={0.2} offset={3}>
            <BottomSVG />
          </Divider>
          <Content speed={0.4} offset={4}>
            <Contact />
          </Content>
          <Divider speed={0.1} offset={3}>
            <FooterSVG />
          </Divider>
        </Parallax>
        {modalVisible &&
        <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
          <Modal toggleModal={this.toggleModal} modalData={modalData} />
        </div>}
      </Fragment>
    );
  }
}

Index.propTypes = {
  /** The window location. */
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired,
};

export default Index;
