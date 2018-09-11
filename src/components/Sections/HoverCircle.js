import React, { Component, createRef } from 'react';
import { findDOMNode } from 'react-dom';
import { Transition } from 'react-transition-group';

import SVG from '../SVG/SVG';
import { colors } from '../../../tailwind';
import { Shake } from '../../styles/animations';

const duration = 300;

const defaultRotate = {
  position: 'absolute',
  left: '65%',
  top: '20%',
  transition: `transform ${duration * 8}ms ease-in-out, left ${duration * 4}ms ease-in-out, top ${duration * 6}ms ease-in-out ${duration}ms`,
  transform: 'rotate(40deg)',
};

const rotateStyles = {
  entering: { transform: 'rotate(100deg)', left: '75%', top: '-20%' },
  entered: { transform: 'rotate(100deg)', left: '75%', top: '-20%' },
};

const hideStyles = {
  entering: {
    top: '30%',
    transition: `transform ${duration * 8}ms ease-in-out, left ${duration * 4}ms ease-in-out, top ${duration * 8}ms ease-in-out`,
  },
  entered: { top: '30%' },
};

class HoverCircle extends Component {
  state = {
    triggered: false,
    pastTriggered: false,
    yOffset: 0,
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
    const { isButton, setOffset } = this.props;
    if (!isButton) {
      setOffset(this.getOffset());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  getOffset = () => {
    const node = findDOMNode(this.hoverCircleRef.current);
    const boundingClient = node.getBoundingClientRect();
    return boundingClient.y;
  }

  hoverCircleRef = createRef();

  handleScroll = () => {
    const { isButton, setScrollPosition } = this.props;
    if (!isButton) {
      setScrollPosition(this.getOffset());
    }
    const { projectsScroll } = this.props;
    const { triggered, pastTriggered } = this.state;
    if (!triggered && projectsScroll < 650) {
      this.setState({
        triggered: true,
      });
    }
    if (triggered && projectsScroll > 650) {
      this.setState({
        triggered: false,
      });
    }
    if (!pastTriggered && projectsScroll < 250) {
      this.setState({
        pastTriggered: true,
      });
    }
    if (pastTriggered && projectsScroll > 250) {
      this.setState({
        pastTriggered: false,
      });
    }
  };

  render() {
    const { isButton } = this.props;
    const { triggered, pastTriggered } = this.state;
    return (
      <div
        ref={this.hoverCircleRef}
        role="button"
        tabIndex={-1}
        onClick={this.props.viewCode}
        onKeyPress={this.props.viewCode}
      >
        <Transition in={triggered} timeout={duration}>
          {(state) => (
            <Transition in={pastTriggered} timeout={duration}>
              {(pastState) => (
                <div
                  style={{
                ...defaultRotate,
                ...rotateStyles[state],
                ...hideStyles[pastState],
            }}
                >
                  <SVG icon="circle" width={64} fill={isButton ? colors.transparent : colors.green}>
                    <defs>
                      <path
                        id="hoverCircleText"
                        d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
                      />
                    </defs>
                    <text fontSize="3" fill={isButton ? colors.transparent : colors.black} strokeWidth="0">
                      <textPath baselineShift="-3.5px" xlinkHref="#hoverCircleText">
                    Want to see the code for this site?
                      </textPath>
                    </text>
                  </SVG>
                </div>
          )}
            </Transition>
          )}
        </Transition>
      </div>
    );
  }
}

export default HoverCircle;

