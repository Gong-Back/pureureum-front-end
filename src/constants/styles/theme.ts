import { COLORS } from './color';
import { FONT_STYLE_PC, FONT_STYLE_MOBILE } from './font';

export const theme = {
  colors: COLORS,
  fonts: {
    pc: FONT_STYLE_PC,
    mobile: FONT_STYLE_MOBILE,
  },
};

export type ThemeType = typeof theme;
