import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const DEFAULT_SIZES = {
  small: { width: 100, height: 35, mHeight: 32 },
  medium: { width: 120, height: 40, mHeight: 38 },
  large: { width: 150, height: 45, mHeight: 42 },
};

export const Button = styled.button<ButtonProps>(
  ({ theme, sizeType, themeColor, isFilled, isRound }) => {
    const { colors, fonts, mediaQueries } = theme;
    const isSmallSize = sizeType === 'small';
    return {
      width: DEFAULT_SIZES[sizeType ?? 'medium'].width,
      height: DEFAULT_SIZES[sizeType ?? 'medium'].height,
      backgroundColor: isFilled ? themeColor : 'none',
      color: isFilled ? colors.grayscale.white : themeColor,
      border: isFilled ? 'none' : `1px solid ${themeColor}`,
      borderRadius: isRound ? 25 : 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      fontSize: fonts.pc[isSmallSize ? 'body3' : 'body2B'].fontSize,
      fontWeight: fonts.pc[isSmallSize ? 'body3' : 'body2B'].fontWeight,
      lineHeight: fonts.pc[isSmallSize ? 'body3' : 'body2B'].lineHeight,

      [`@media ${mediaQueries.mobile}`]: {
        height: DEFAULT_SIZES[sizeType ?? 'small'].mHeight,
        fontSize: fonts.mobile[isSmallSize ? 'body3' : 'body2B'].fontSize,
        fontWeight: fonts.mobile[isSmallSize ? 'body3' : 'body2B'].fontWeight,
        lineHeight: fonts.mobile[isSmallSize ? 'body3' : 'body2B'].lineHeight,
      },
    };
  },
);
