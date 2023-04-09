import { useRouter } from 'next/router';

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
    { title: '현재 진행 중인', icon: <CocoPresentationIcon /> },
    { title: '진행 완료 된', icon: <CocoNoteDeleteIcon /> },
    { title: '승인 대기 중인', icon: <CocoNotificationIcon /> },
    { title: '내가 관심 있는', icon: <CocoSavedIcon /> },
  ],
  personal: [
    { title: '정보 수정', icon: <CocoUserIcon /> },
    { title: '알림 관리', icon: <CocoNotificationBellIcon /> },
    { title: '작성 글 관리', icon: <CocoNoteIcon /> },
  ],
  operation: [
    { title: '프로젝트 관리', icon: <CocoNoteIcon /> },
    { title: '신규 시설 등록', icon: <CocoNoteIcon /> },
    { title: '시설 관리', icon: <CocoNoteIcon /> },
  ],
};

const SideNavigationBar = () => {
  const router = useRouter();
  return (
    <style.Wrapper>
      <style.NavGroup>
        <style.NavGroupTitle>프로젝트</style.NavGroupTitle>
        <style.NavItemList>
          {sideNavigationElement.project.map(({ title, icon }) => (
            <style.NavItemGroup>
              <style.NavItem>{title}</style.NavItem>
              {icon}
            </style.NavItemGroup>
          ))}
        </style.NavItemList>
      </style.NavGroup>
      <style.NavGroup>
        <style.NavGroupTitle>내 정보 관리</style.NavGroupTitle>
        {sideNavigationElement.personal.map(({ title, icon }) => (
          <style.NavItemGroup>
            <style.NavItem>{title}</style.NavItem>
            {icon}
          </style.NavItemGroup>
        ))}
      </style.NavGroup>
      <style.NavGroup>
        <style.NavGroupTitle>프로젝트 운영</style.NavGroupTitle>
        {sideNavigationElement.operation.map(({ title, icon }) => (
          <style.NavItemGroup>
            <style.NavItem>{title}</style.NavItem>
            {icon}
          </style.NavItemGroup>
        ))}
      </style.NavGroup>
    </style.Wrapper>
  );
};

export default SideNavigationBar;
