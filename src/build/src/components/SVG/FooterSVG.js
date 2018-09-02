const code = `import React, { Fragment } from 'react';

import { UpDown, UpDownWide } from '../../styles/animations';
import SVG from './SVG';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

const FooterSVG = () => (
  <Fragment>
    <UpDown>
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
      <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
    <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
  </Fragment>
);

export default FooterSVG;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'animations.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'SVG',
      'SVG.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'utils.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'tailwind.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'FooterSVG.js',
  label: 'FooterSVG.js',
};