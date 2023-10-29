import NoteDeleteIcon from '@/assets/icons/noteDeleteIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';
import NotificationBellIcon from '@/assets/icons/notificationBellIcon.svg';
import NotificationIcon from '@/assets/icons/notificationIcon.svg';
import PresentationIcon from '@/assets/icons/presentationIcon.svg';
import LocationIcon from '@/assets/icons/locationIcon.svg';
import SavedIcon from '@/assets/icons/savedIcon.svg';
import UserIcon from '@/assets/icons/userIcon.svg';

export const MYPAGE_NAVIGATION_CONTENT = [
  {
    label: '문화 시민증',
    contents: [
      {
        title: '시민증 발급',
        icon: <SavedIcon />,
        path: '/mypage/license/issue',
      },
    ],
  },
  {
    label: '프로젝트',
    contents: [
      {
        title: '내가 관심 있는',
        icon: <SavedIcon />,
        path: '/mypage/project/favorite',
      },
      {
        title: '내가 의견을 낸',
        icon: <NotificationIcon />,
        path: '/mypage/project/comment',
      },
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
    ],
  },
  {
    label: '내 정보 관리',
    contents: [
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
        path: '/mypage/personal/post',
      },
    ],
  },
  {
    label: '프로젝트 운영',
    contents: [
      {
        title: '승인 대기 중인',
        icon: <NotificationIcon />,
        path: '/mypage/project/pending',
      },
      {
        title: '현재 운영 중인',
        icon: <LocationIcon />,
        path: '/mypage/project/operated',
      },
    ],
  },
];
