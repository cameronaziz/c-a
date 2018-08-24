import React from 'react';

import { Divider } from '../styled';
import { UpDown, UpDownWide } from '../../styles/animations';
import SVG from './SVG';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

const FooterSVG = () => (
  <Divider speed={0.1} offset={3}>
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
  </Divider>
);

export default FooterSVG;
