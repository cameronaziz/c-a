const code = `import React, { Component } from 'react';

import { WhyNotificationContainer } from './styled';

class WhyNotification extends Component {
  state = { visible: false };

  toggleVisible = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  render() {
    const { visible } = this.state;
    let className = 'absolute rounded-b text-teal-darkest px-4 py-3';
    if (visible) {
      className = \`\${className} bg-teal-lightest border-teal border-t-4 shadow-md\`;
    }
    return (
      <WhyNotificationContainer
        tabIndex={-1}
        onFocus={this.toggleVisible}
        onBlur={this.toggleVisible}
        onMouseOver={this.toggleVisible}
        onMouseOut={this.toggleVisible}
        className={className}
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <svg className="fill-current h-6 w-6 text-teal mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </div>
          {visible && (
            <div>
              <p className="font-bold">Why can&apos;t I see all the code?</p>
              <p className="text-sm">
                This code was written for an organization that does not have their codebase public.
              </p>
            </div>
          )}
        </div>
      </WhyNotificationContainer>
    );
  }
}

export default WhyNotification;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Modal',
      'styled.js',
    ],
  },
];

const libraries = ['react', 'svg'];

export default {
  libraries,
  code,
  links,
  name: 'WhyNotification.js',
  label: 'WhyNotification.js',
};
