import React from 'react';
import bell from './bell.svg';
import backArrow from './backArrow.svg';
import emptyUser from './emptyUser.svg';
import exclamation from './exclamation.svg';

import {SvgProps} from 'react-native-svg';

interface IIcons {
  [index: string]: React.FC<SvgProps>;
}

const Icons: IIcons = {
  bell,
  backArrow,
  emptyUser,
  exclamation,
};

export default Icons;
