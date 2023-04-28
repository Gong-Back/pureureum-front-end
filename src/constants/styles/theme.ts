import { COLORS } from './color';
import { FONT_STYLE_PC, FONT_STYLE_MOBILE } from './font';
import { MEDIA_QUERIES } from './mediaQueries';

export const theme = {
  colors: COLORS,
  fonts: {
    pc: FONT_STYLE_PC,
    mobile: FONT_STYLE_MOBILE,
  },
  mediaQueries: MEDIA_QUERIES,
};

export type ThemeType = typeof theme;
