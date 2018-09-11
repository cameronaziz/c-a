import React, { Fragment } from 'react';

import { UpDown, UpDownWide } from '../../styles/animations';
import SVG from './SVG';
import { hidden } from '../../styles/utils';
import { colors } from '../../../tailwind';

const HeaderSVG = () => (
  <Fragment>
    <UpDown>
      <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
      <SVG icon="upDown" width={8} fill={colors.teal} left="85%" top="20%" />
      <SVG icon="triangle" width={8} stroke={colors.orange} left="25%" top="5%" />
      <SVG icon="circle" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
    </UpDown>
    <UpDownWide>
      <SVG icon="arrowUp" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
      <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="30%" />
      <SVG icon="circle" width={16} fill={colors.yellow} left="70%" top="90%" />
      <SVG icon="triangle" className={hidden} width={16} stroke={colors.teal} left="18%" top="75%" />
      <SVG icon="circle" width={6} fill={colors.white} left="75%" top="10%" />
      <SVG icon="upDown" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
    </UpDownWide>
    <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
    <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
    <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
    <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
    <SVG icon="hexa" width={16} stroke={colors.red} left="45%" top="30%" />
    <SVG icon="hexa" width={8} stroke={colors.yellow} left="80%" top="70%" />
  </Fragment>
);

export default HeaderSVG;
