import { ReactElement } from 'react';

import GalleryIcon from '@/assets/icons/galleryIcon.svg';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';

export const DashboardNavList = ['home', 'board', 'gallery'] as const;

export const DashboardNavInfo: Record<
  typeof DashboardNavList[number],
  { path: string; text: string; icon?: ReactElement }
> = {
  home: {
    text: '모임 홈',
    icon: <HomeIcon />,
    path: '/',
  },
  board: {
    text: '게시판',
    icon: <NoteIcon />,
    path: '/board',
  },
  gallery: {
    text: '갤러리',
    icon: <GalleryIcon />,
    path: '/gallery',
  },
} as const;
