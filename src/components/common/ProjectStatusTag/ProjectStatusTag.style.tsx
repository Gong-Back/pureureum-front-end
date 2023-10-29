import styled from '@emotion/styled';

import { COLORS, MEDIA_QUERIES } from '@/constants/styles';

interface WrapperProps {
  isBigSize: boolean;
}

export const Wrapper = styled.div(({ isBigSize }: WrapperProps) => ({
  width: isBigSize ? 120 : 80,
  height: isBigSize ? 50 : 34,
  borderRadius: 30,

  backgroundColor: COLORS.grayscale.gray100,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> .text': {
    color: COLORS.grayscale.gray600,
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: isBigSize ? 145 : 70,
    height: isBigSize ? 45 : 32,
  },
}));
