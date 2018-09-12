const code = `import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import _ from 'lodash';

import { colors } from '../../../tailwind';
import { duration, defaultRotate, rotateStyles } from './util';

class HoverCircle extends Component {
  state = {
    triggered: false,
  }

  componentDidMount() {
    window.addEventListener('wheel', _.throttle(this.handleScroll, 500));
    const { isButton, setScrollPosition } = this.props;
    if (!isButton) {
      setScrollPosition(this.getOffset());
    }
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  getOffset = () => {
    const node = this.hoverCircleRef.current;
    const boundingClient = node.getBoundingClientRect();
    return boundingClient.y;
  }

  hoverCircleRef = createRef();

  handleScroll = () => {
    const { triggered } = this.state;
    const { isButton, setScrollPosition, projectsScroll } = this.props;
    if (!isButton) {
      const yOffset = this.getOffset();
      setScrollPosition(yOffset);
      if (yOffset < 100) {
        this.props.viewProjects();
      }
    }
    if (!triggered && projectsScroll < 100) {
      this.setState({
        triggered: true,
      });
    }
    if (triggered && projectsScroll > 100) {
      this.setState({
        triggered: false,
      });
    }
  };

  render() {
    const { isButton } = this.props;
    const { triggered } = this.state;
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
            <div
              style={{
                ...defaultRotate,
                ...rotateStyles[state],
              }}
            >
              <svg width={350} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path
                    id="hover-circle"
                    d="M 360 200 C 360 111.63444002707307 288.3655599729269 40.00000000000001 200 40 C 111.63444002707307 40.000000000000014 39.999999999999986 111.63444002707308 40 200 C 40.000000000000014 288.3655599729269 111.63444002707308 360 200 360 C 288.3655599729269 360 360 288.3655599729269 360 200 Z"
                    style={{
                      stroke: 'rgb(216, 216, 216)',
                      strokeWidth: '55px',
                      fill: isButton ? colors.transparent : colors.black,
                    }}
                  />
                </defs>
                <path
                  d="M 360 200 A 160 160 0 0 1 200 360 A 160 160 0 0 1 40 200 A 160 160 0 0 1 200 40 A 160 160 0 0 1 360 200 Z"
                  style={{
                    stroke: isButton ? colors.transparent : colors.green,
                    strokeWidth: '80px',
                    fill: 'none',
                  }}
                />
                <text
                  style={{
                    whiteSpace: 'pre',
                    fill: isButton ? colors.transparent : colors.black,
                    fontSize: '24px',
                  }}
                >
                  <textPath dominantBaseline="middle" startOffset="500" xlinkHref="#hover-circle">
                    Click to see the code for this site!
                  </textPath>
                </text>
              </svg>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

HoverCircle.propTypes = {
  viewProjects: PropTypes.func,
  viewCode: PropTypes.func,
  setScrollPosition: PropTypes.func,
  isButton: PropTypes.bool,
  projectsScroll: PropTypes.number.isRequired,
};

HoverCircle.defaultProps = {
  viewProjects: undefined,
  isButton: undefined,
  setScrollPosition: undefined,
  viewCode: undefined,
};

export default HoverCircle;
`;

const links = [
  {
    line: 6,
    location: [
      'src',
      'components',
      'tailwind.js'
    ]
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'Sections',
      'util.js'
    ]
  }
];

const libraries = ['react','propTypes','reactTransitionGroup','lodash','svg'];

export default {
  libraries,
  code,
  links,
  name: 'HoverCircle.js',
  label: 'HoverCircle.js',
};