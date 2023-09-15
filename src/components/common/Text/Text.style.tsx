import { FontStyleName } from '@/constants/styles';
import styled from '@emotion/styled';

interface TextWrapProps {
  color?: string;
  fontStyleName: FontStyleName;
}

export const TextWrap = styled.div<TextWrapProps>(
  ({ theme, color, fontStyleName }) => {
    const { colors, fonts, mediaQueries } = theme;
    return {
      color: color ?? colors.grayscale.dark,
      fontSize: fonts.pc[fontStyleName].fontSize,
      fontWeight: fonts.pc[fontStyleName].fontWeight,
      lineHeight: fonts.pc[fontStyleName].lineHeight,

      [`@media ${mediaQueries.mobile}`]: {
        fontSize: fonts.mobile[fontStyleName].fontSize,
        fontWeight: fonts.mobile[fontStyleName].fontWeight,
        lineHeight: fonts.pc[fontStyleName].lineHeight,
      },
    };
  },
);
