import { ReactElement } from 'react';

import GalleryIcon from '@/assets/icons/galleryIcon.svg';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';

export const DashboardNavList = ['home', 'board', 'gallery'] as const;

export const DashboardNavInfo: Record<
  typeof DashboardNavList[number],
  { text: string; icon?: ReactElement; path: string }
> = {
  home: {
    text: '모임 홈',
    icon: <HomeIcon />,
    path: '/dashboard/[pid]',
  },
  board: {
    text: '게시판',
    icon: <NoteIcon />,
    path: '/dashboard/[pid]/board',
  },
  gallery: {
    text: '갤러리',
    icon: <GalleryIcon />,
    path: '/dashboard/[pid]/gallery',
  },
} as const;
