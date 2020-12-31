import { createStyled } from '@stitches/react';
import commonUtils from './commonUtils';
import theme from './theme';
import utils from './utils';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: theme,
  breakpoints: {},
  utils: {
    ...commonUtils,
    ...utils,
  },
});
