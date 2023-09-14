import { ReactElement } from 'react';
import CommunityIcon from '@/assets/icons/communityIcon.svg';
import HomeIcon from '@/assets/icons/homeIcon.svg';
import NoteDeleteIcon from '@/assets/icons/noteDeleteIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';
import NotificationBellIcon from '@/assets/icons/notificationBellIcon.svg';
import NotificationIcon from '@/assets/icons/notificationIcon.svg';
import PresentationIcon from '@/assets/icons/presentationIcon.svg';
import ProjectIcon from '@/assets/icons/projectIcon.svg';
import SavedIcon from '@/assets/icons/savedIcon.svg';
import UserIcon from '@/assets/icons/userIcon.svg';

export type NAV_ITEM_NAME = 'home' | 'mypage' | 'project' | 'community';

// 전체 네비게이션 관련 정보
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

export const PcNavList = ['mypage', 'project', 'community'] as NAV_ITEM_NAME[];

export const MobileNavList = [
  'home',
  'project',
  'community',
  'mypage',
] as NAV_ITEM_NAME[];

// 마이 페이지 내 네비게이션 관련 정보
export const MyPageNavInfo = {
  project: [
    {
      title: '현재 진행 중인',
      icon: <PresentationIcon />,
      path: '/mypage/project/progressed',
    },
    {
      title: '진행 완료 된',
      icon: <NoteDeleteIcon />,
      path: '/mypage/project/completed',
    },
    {
      title: '승인 대기 중인',
      icon: <NotificationIcon />,
      path: '/mypage/project/pending',
    },
    {
      title: '내가 관심 있는',
      icon: <SavedIcon />,
      path: '/mypage/project/favorite',
    },
  ],
  personal: [
    {
      title: '정보 수정',
      icon: <UserIcon />,
      path: '/mypage/personal/profile',
    },
    {
      title: '알림 관리',
      icon: <NotificationBellIcon />,
      path: '/mypage/personal/notification',
    },
    {
      title: '작성한 글 관리',
      icon: <NoteIcon />,
      path: '/mypage/personal/',
    },
  ],
  operation: [
    {
      title: '프로젝트 관리',
      icon: <NoteIcon />,
      path: '/mypage/operation/project',
    },
    {
      title: '신규 시설 등록',
      icon: <NoteIcon />,
      path: '/mypage/operation/apply',
    },
    {
      title: '시설 관리',
      icon: <NoteIcon />,
      path: '/mypage/operation/facilities',
    },
  ],
} as const;
