import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${COLORS.grayscale.gray300};
    font-size: 23px;
    margin: 0px 1px;
  }

  .slash {
    margin-right: 4px;
  }
`;

export const RangeInputWrap = styled.div(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    '> .year-input': {
      width: 63,
    },
    '> .month-input, > .day-input': {
      width: 35,
    },
    '> .age-input': {
      width: 30,
      '::placeholder': {
        color: colors.grayscale.gray300,
        ...fonts.pc.subtitle3,
      },
    },
  };
});

export const RangeInput = styled.input(({ theme }) => {
  const { colors, fonts } = theme;
  return {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,

    color: colors.grayscale.gray500,
    ...fonts.pc.subtitle2B,
    letterSpacing: 2,

    '::placeholder': {
      color: colors.grayscale.gray300,
      ...fonts.pc.subtitle3,
      letterSpacing: -0.8,
    },
  };
});
