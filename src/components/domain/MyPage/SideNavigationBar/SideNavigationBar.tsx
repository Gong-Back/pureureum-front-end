import Link from 'next/link';

import CocoNoteDeleteIcon from '@/assets/icons/coco/noteDeleteIcon.svg';
import CocoNoteIcon from '@/assets/icons/coco/noteIcon.svg';
import CocoNotificationIcon from '@/assets/icons/coco/notificationIcon.svg';
import CocoNotificationBellIcon from '@/assets/icons/coco/notificationBellIcon.svg';
import CocoSavedIcon from '@/assets/icons/coco/savedIcon.svg';
import CocoUserIcon from '@/assets/icons/coco/userIcon.svg';
import CocoPresentationIcon from '@/assets/icons/coco/presentationIcon.svg';

import * as style from './SideNavigationBar.style';

const sideNavigationElement = {
  project: [
    {
      title: '현재 진행 중인',
      icon: <CocoPresentationIcon />,
      path: '/mypage/project/progressed',
    },
    {
      title: '진행 완료 된',
      icon: <CocoNoteDeleteIcon />,
      path: '/mypage/project/completed',
    },
    {
      title: '승인 대기 중인',
      icon: <CocoNotificationIcon />,
      path: '/mypage/project/wait',
    },
    {
      title: '내가 관심 있는',
      icon: <CocoSavedIcon />,
      path: '/mypage/project/favorite',
    },
  ],
  personal: [
    {
      title: '정보 수정',
      icon: <CocoUserIcon />,
      path: '/mypage/personal/profile',
    },
    {
      title: '알림 관리',
      icon: <CocoNotificationBellIcon />,
      path: '/mypage/personal/notification',
    },
    {
      title: '작성 글 관리',
      icon: <CocoNoteIcon />,
      path: '/mypage/personal/',
    },
  ],
  operation: [
    {
      title: '프로젝트 관리',
      icon: <CocoNoteIcon />,
      path: '/mypage/operation/project',
    },
    {
      title: '신규 시설 등록',
      icon: <CocoNoteIcon />,
      path: '/mypage/operation/apply',
    },
    {
      title: '시설 관리',
      icon: <CocoNoteIcon />,
      path: '/mypage/operation/manage',
    },
  ],
};

const SideNavigationBar = () => (
  <style.Wrapper>
    <style.NavGroup>
      <style.NavGroupTitle>프로젝트</style.NavGroupTitle>
      <style.NavItemList>
        {sideNavigationElement.project.map(({ title, icon, path }) => (
          <style.NavItemGroup key={title}>
            <Link href={path} passHref>
              {title}
            </Link>
            {icon}
          </style.NavItemGroup>
        ))}
      </style.NavItemList>
    </style.NavGroup>
    <style.NavGroup>
      <style.NavGroupTitle>내 정보 관리</style.NavGroupTitle>
      <style.NavItemList>
        {sideNavigationElement.personal.map(({ title, icon, path }) => (
          <style.NavItemGroup key={title}>
            <Link href={path} passHref>
              {title}
            </Link>
            {icon}
          </style.NavItemGroup>
        ))}
      </style.NavItemList>
    </style.NavGroup>
    <style.NavGroup>
      <style.NavGroupTitle>프로젝트 운영</style.NavGroupTitle>
      <style.NavItemList>
      {sideNavigationElement.operation.map(({ title, icon, path }) => (
        <style.NavItemGroup key={title}>
          <Link href={path} passHref>
            {title}
          </Link>
          {icon}
        </style.NavItemGroup>
      ))}
      </style.NavItemList>
    </style.NavGroup>
  </style.Wrapper>
);

export default SideNavigationBar;
