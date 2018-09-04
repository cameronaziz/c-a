const code = `import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import SVG from '../SVG/SVG';
import { colors } from '../../../tailwind';
import { Shake } from '../../styles/animations';

const duration = 300;

const defaultStyle = {
  transition: \`left \${duration}ms ease-in-out\`,
  position: 'absolute',
  left: '95%',
  top: '5%',
  animationIterationCount: 'infinite',
};


const defaultRotate = {
  transformOrigin: 'center',
  transition: \`transform \${duration}ms ease-in-out\`,
  transform: 'rotate(160deg)',
};

const rotateStyles = {
  entering: { transform: 'rotate(160deg)' },
  entered: { transform: 'rotate(30deg)' },
};

class HoverCircle extends Component {
  state = {
    isHovered: false,
  }

  toggleHover = () => {
    const { isHovered } = this.state;
    this.setState({
      isHovered: !isHovered,
    });
  }

  render() {
    const { transitionStyles } = this.props;
    const { isHovered } = this.state;
    return (
      <div
        role="button"
        tabIndex={-1}
        onClick={this.props.viewCode}
        onKeyPress={this.props.viewCode}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <Transition in={isHovered} timeout={duration} onEntered={this.props.stopShaking}>
          {(state) => (
            <Shake style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            >
              <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%">
                <defs>
                  <path
                    id="hoverCircle"
                    d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z"
                    style={{
                      ...defaultRotate,
                      ...rotateStyles[state],
                    }}
                  />
                </defs>
                <text fontSize="3" fill="#000" strokeWidth="0">
                  <textPath baselineShift="-3.5px" xlinkHref="#hoverCircle">
                    Want to see the code for this site?
                  </textPath>
                </text>
              </SVG>
            </Shake>
          )}
        </Transition>
      </div>
    );
  }
}

export default HoverCircle;

`;

const links = [
  {
    line: 4,
    location: [
      'src',
      'components',
      'SVG.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'tailwind.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'animations.js'
    ]
  }
];

const libraries = ['react','reactTransitionGroup'];

export default {
  libraries,
  code,
  links,
  name: 'HoverCircle.js',
  label: 'HoverCircle.js',
};