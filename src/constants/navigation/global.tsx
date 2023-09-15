import { ReactElement } from 'react';
import CommunityIcon from '@/assets/icons/communityIcon.svg';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import ProjectIcon from '@/assets/icons/projectIcon.svg';
import UserIcon from '@/assets/icons/userIcon.svg';

export type NAV_ITEM_NAME = 'home' | 'mypage' | 'project' | 'community';

export const NavInfo: Record<
  NAV_ITEM_NAME,
  { path: string; text: string; icon?: ReactElement }
> = {
  home: {
    path: '/',
    text: '홈',
    icon: <HomeIcon />,
  },
  mypage: {
    path: '/mypage/project/pending',
    text: '나의 푸르름',
    icon: <UserIcon />,
  },
  project: {
    path: '/project',
    text: '프로젝트',
    icon: <ProjectIcon />,
  },
  community: {
    path: '/community',
    text: '커뮤니티',
    icon: <CommunityIcon />,
  },
};

// PC 상단 네비게이션 내 메뉴
export const PcNavList = ['mypage', 'project', 'community'] as NAV_ITEM_NAME[];

// Mobile 하단 네비게이션 내 메뉴
export const MobileNavList = [
  'home',
  'project',
  'community',
  'mypage',
] as NAV_ITEM_NAME[];
