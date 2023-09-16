import '@emotion/react';

import { COLORS } from './color';
import { FONT_STYLE_MOBILE, FONT_STYLE_PC } from './font';
import { MEDIA_QUERIES } from './mediaQueries';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof COLORS;
    fonts: {
      pc: typeof FONT_STYLE_PC;
      mobile: typeof FONT_STYLE_MOBILE;
    };
    mediaQueries: typeof MEDIA_QUERIES;
  }
}
