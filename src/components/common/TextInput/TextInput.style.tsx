import styled from '@emotion/styled';
import { TextInputProps } from './TextInput';

const DEFAULT_SIZES = {
  small: { width: 300, height: 40 },
  medium: { width: 400, height: 50 },
  large: { width: 500, height: 50 },
};

export const Input = styled.input<Omit<TextInputProps, 'value'>>(
  ({ theme, isFilled, isRound, sizeType, width }) => {
    const { colors, fonts } = theme;
    return {
      width: width ?? DEFAULT_SIZES[sizeType ?? 'small'].width,
      height: DEFAULT_SIZES[sizeType ?? 'small'].height,
      paddingLeft: 25,
      color: colors.grayscale.gray500,
      border: isFilled ? 'none' : `1px solid ${colors.grayscale.gray500}`,
      borderRadius: isRound ? 30 : 5,
      backgroundColor: isFilled ? '#F8F8F8' : colors.grayscale.white,

      fontSize: fonts.pc[sizeType === 'small' ? 'body3' : 'body2R'].fontSize,
      fontWeight:
        fonts.pc[sizeType === 'small' ? 'body3' : 'body2R'].fontWeight,
      lineHeight:
        fonts.pc[sizeType === 'small' ? 'body3' : 'body2R'].lineHeight,
    };
  },
);
