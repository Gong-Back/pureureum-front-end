import '@emotion/react';
import { COLORS } from './color';
import { FONT_STYLE_PC, FONT_STYLE_MOBILE } from './font';
import { MEDIA_QUERIES } from './mediaQuery';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof COLORS;
    fonts: {
      pc: typeof FONT_STYLE_PC;
      mobile: typeof FONT_STYLE_MOBILE;
    };
    medias: typeof MEDIA_QUERIES;
  }
}
