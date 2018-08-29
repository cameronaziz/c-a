import React, { Fragment, Component } from 'react';
import { Parallax } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import Modal from '../components/Modal';
import Projects from '../components/Projects';
import { About, Header, Contact } from '../components/Sections';
import { DividerMiddle } from '../components/styled';
import { HeaderSVG, MidSVG, BottomSVG, FooterSVG } from '../components/SVG';

import '../styles/global';
import '../../tailwind.custom.css';

class Index extends Component {
  state = {
    modalVisible: false,
    example: undefined,
  };

  setExample = example => {
    this.setState({
      example,
    });
  };

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  render() {
    const { modalVisible, example } = this.state;
    const style = modalVisible
      ? {
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        height: '100%',
      }
      : undefined;
    return (
      <Fragment>
        <SEO />
        <Parallax pages={4}>
          <div style={style}>
            <HeaderSVG />
            <Header />
            <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1.1} />
            <Projects setExample={this.setExample} toggleModal={this.toggleModal} />
            <MidSVG />
            <About />
            <BottomSVG />
            <Contact />
            <FooterSVG />
          </div>
        </Parallax>
        {modalVisible && <Modal toggleModal={this.toggleModal} modalData={example} />}
      </Fragment>
    );
  }
}
export default Index;
