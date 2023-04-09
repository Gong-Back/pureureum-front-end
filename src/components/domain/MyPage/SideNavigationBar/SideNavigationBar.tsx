import { useRouter } from 'next/router';

import CocoNoteDeleteIcon from '@/assets/icons/coco/noteDeleteIcon.svg';
import CocoNoteIcon from '@/assets/icons/coco/noteIcon.svg';
import CocoNotificationIcon from '@/assets/icons/coco/notificationIcon.svg';
import CocoNotificationBellIcon from '@/assets/icons/coco/notificationBellIcon.svg';
import CocoSavedIcon from '@/assets/icons/coco/savedIcon.svg';
import CocoUserIcon from '@/assets/icons/coco/userIcon.svg';
import CocoPresentationIcon from '@/assets/icons/coco/presentationIcon.svg';

import * as style from './SideNavigationBar.style';

const SideNavigationBar = () => {
  const router = useRouter();
  return (
    <style.Wrapper>
      <style.NavGroup>
        <style.NavGroupTitle>프로젝트</style.NavGroupTitle>
        <style.NavItemList>
          <style.NavItemGroup>
            <style.NavItem>현재 진행 중인 </style.NavItem>
            <CocoPresentationIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>진행 완료 된</style.NavItem>
            <CocoNoteDeleteIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>승인 대기 중인</style.NavItem>
            <CocoNotificationIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>내가 관심 있는</style.NavItem>
            <CocoSavedIcon />
          </style.NavItemGroup>
        </style.NavItemList>
      </style.NavGroup>
      <style.NavGroup>
        <style.NavGroupTitle>내 정보 관리</style.NavGroupTitle>
        <style.NavItemList>
          <style.NavItemGroup>
            <style.NavItem>정보 수정</style.NavItem>
            <CocoUserIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>알림 관리</style.NavItem>
            <CocoNotificationBellIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>작성 글 관리</style.NavItem>
            <CocoNoteIcon />
          </style.NavItemGroup>
        </style.NavItemList>
      </style.NavGroup>
      <style.NavGroup>
        <style.NavGroupTitle>프로젝트 운영</style.NavGroupTitle>
        <style.NavItemList>
          <style.NavItemGroup>
            <style.NavItem>프로젝트 관리</style.NavItem>
            <CocoNoteIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>신규 시설 등록</style.NavItem>
            <CocoNoteIcon />
          </style.NavItemGroup>
          <style.NavItemGroup>
            <style.NavItem>시설 관리</style.NavItem>
            <CocoNoteIcon />
          </style.NavItemGroup>
        </style.NavItemList>
      </style.NavGroup>
    </style.Wrapper>
  );
};

export default SideNavigationBar;
