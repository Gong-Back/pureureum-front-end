import { ReactElement } from 'react';

import HomeIcon from '@/assets/icons/homeIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';

export const DashboardNavList = [
  'home',
  'notice',
  'gallery',
  'freeBoard',
  'qnaBoard',
] as const;

export const DashboardNavInfo: Record<
  typeof DashboardNavList[number],
  { path: string; text: string; icon?: ReactElement }
> = {
  home: {
    text: '대시보드 홈',
    icon: <HomeIcon />,
    path: '/',
  },
  notice: {
    text: '공지사항',
    icon: <NoteIcon />,
    path: '/notice',
  },
  gallery: {
    text: '갤러리',
    icon: <NoteIcon />,
    path: '/gallery',
  },
  freeBoard: {
    text: '자유 게시판',
    icon: <NoteIcon />,
    path: '/board',
  },
  qnaBoard: {
    text: '질문 게시판',
    icon: <NoteIcon />,
    path: '/questions',
  },
} as const;
