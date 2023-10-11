import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';
import { CategoryType } from '@/constants/types';

const COLORS: Record<CategoryType, { background: string; text: string }> = {
  YOUTH_FARMING: { background: '#FFE2B1', text: '#6A4300' },
  FARMING_HEALING: { background: '#FFE9E9', text: '#B80000' },
  FARMING_EXPERIENCE: { background: '#E2FFBC', text: '#2e5200' },
  ETC: { background: '#DEF9FF', text: '#214B54' },
};

interface WrapperProps {
  isBigSize: boolean;
  type: CategoryType;
}

export const Wrapper = styled.div(({ isBigSize, type }: WrapperProps) => ({
  width: isBigSize ? 170 : 80,
  height: isBigSize ? 50 : 34,
  borderRadius: 30,

  backgroundColor: COLORS[type].background,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> .text': {
    color: COLORS[type].text,
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: isBigSize ? 145 : 70,
    height: isBigSize ? 45 : 32,
  },
}));
