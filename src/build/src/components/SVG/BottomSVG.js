const code = `import React, { Fragment } from 'react';

import { WaveWrapper, InnerWave } from '../styled';
import { waveAnimation } from '../../styles/animations';

const BottomSVG = () => (
  <Fragment>
    <WaveWrapper>
      <InnerWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
          <path className={waveAnimation}>
            <animate
              attributeName="d"
              values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
              repeatCount="indefinite"
              dur="30s"
            />
          </path>
        </svg>
      </InnerWave>
    </WaveWrapper>
  </Fragment>
);

export default BottomSVG;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'styled.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'animations.js'
    ]
  }
];

const libraries = ['react','svg'];

export default {
  libraries,
  code,
  links,
  name: 'BottomSVG.js',
  label: 'BottomSVG.js',
};