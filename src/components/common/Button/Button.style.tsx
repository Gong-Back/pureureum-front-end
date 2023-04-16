import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const DEFAULT_SIZES = {
  small: { width: 100, height: 35 },
  medium: { width: 120, height: 40 },
  large: { width: 150, height: 45 },
};

export const Button = styled.button<ButtonProps>(
  ({
    theme,
    width,
    textColor,
    borderColor,
    sizeType,
    backgroundColor,
    isRound,
  }) => {
    const { colors, fonts } = theme;
    return {
      width: width ?? DEFAULT_SIZES[sizeType ?? 'small'].width,
      height: DEFAULT_SIZES[sizeType ?? 'small'].height,

      backgroundColor: backgroundColor ?? colors.primary.greenDefault,
      color: textColor ?? colors.grayscale.white,
      border: borderColor ? `1px solid ${borderColor}` : 'none',
      borderRadius: isRound ? 25 : 5,
      textAlign: 'center',
      fontSize: fonts.pc[sizeType === 'small' ? 'body3' : 'body2B'].fontSize,
      fontWeight:
        fonts.pc[sizeType === 'small' ? 'body3' : 'body2B'].fontWeight,
      lineHeight:
        fonts.pc[sizeType === 'small' ? 'body3' : 'body2R'].lineHeight,
    };
  },
);
