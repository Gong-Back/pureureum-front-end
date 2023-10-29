import styled from '@emotion/styled';

import { MEDIA_QUERIES } from '@/constants/styles';
import { ProjectStatusType } from '@/constants/types';

const COLORS: Record<ProjectStatusType, { background: string; text: string }> = {
  ADMIN_REQUIRED: { background: '#f5ffbc', text: '#525100' },
  REJECTED: { background: '#FFE9E9', text: '#B80000' },
  PREPARING: { background: '#E2FFBC', text: '#2e5200' },
  RECRUITING: { background: '#DEF9FF', text: '#214B54' },
  COMPLETED: { background: '#deffe9', text: '#006e32' },
};

interface WrapperProps {
  isBigSize: boolean;
  status: ProjectStatusType,
}

export const Wrapper = styled.div(({ isBigSize, status }: WrapperProps) => ({
  width: isBigSize ? 170 : 80,
  height: isBigSize ? 50 : 34,
  borderRadius: 30,

  backgroundColor: COLORS[status].background,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '> .text': {
    color: COLORS[status].text,
  },

  [`@media ${MEDIA_QUERIES.mobile}`]: {
    width: isBigSize ? 145 : 70,
    height: isBigSize ? 45 : 32,
  },
}));
