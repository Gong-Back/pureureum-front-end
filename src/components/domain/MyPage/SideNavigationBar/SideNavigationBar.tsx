import Link from 'next/link';
import { useRouter } from 'next/router';

import NoteDeleteIcon from '@/assets/icons/noteDeleteIcon.svg';
import NoteIcon from '@/assets/icons/noteIcon.svg';
import NotificationIcon from '@/assets/icons/notificationIcon.svg';
import NotificationBellIcon from '@/assets/icons/notificationBellIcon.svg';
import SavedIcon from '@/assets/icons/savedIcon.svg';
import UserIcon from '@/assets/icons/userIcon.svg';
import PresentationIcon from '@/assets/icons/presentationIcon.svg';

import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
import * as style from './SideNavigationBar.style';

const SIDE_NAV_ELEMENT = {
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

const SideNavigationBar = () => {
  const router = useRouter();
  const isMatchCurrentPage = (path: string) => path === router.pathname;

  return (
    <style.Wrapper>
      <style.Section>
        <Text
          fontStyleName="body2B"
          color={COLORS.grayscale.gray700}
          className="section-title"
        >
          프로젝트
        </Text>
        <style.SectionList>
          {SIDE_NAV_ELEMENT.project.map(({ title, icon, path }) => (
            <Link href={path} passHref>
              <style.NavItem>
                <Text
                  fontStyleName="body3"
                  color={COLORS.grayscale.gray500}
                  className={isMatchCurrentPage(path) ? 'selected' : ''}
                >
                  {title}
                </Text>
                {icon}
              </style.NavItem>
            </Link>
          ))}
        </style.SectionList>
      </style.Section>
      <style.Section>
        <Text
          fontStyleName="body2B"
          color={COLORS.grayscale.gray700}
          className="section-title"
        >
          내 정보 관리
        </Text>
        <style.SectionList>
          {SIDE_NAV_ELEMENT.personal.map(({ title, icon, path }) => (
            <Link href={path} passHref>
              <style.NavItem>
                <Text
                  fontStyleName="body3"
                  color={COLORS.grayscale.gray500}
                  className={isMatchCurrentPage(path) ? 'selected' : ''}
                >
                  {title}
                </Text>
                {icon}
              </style.NavItem>
            </Link>
          ))}
        </style.SectionList>
      </style.Section>
      <style.Section>
        <Text
          fontStyleName="body2B"
          color={COLORS.grayscale.gray700}
          className="section-title"
        >
          프로젝트 운영
        </Text>
        <style.SectionList>
          {SIDE_NAV_ELEMENT.operation.map(({ title, icon, path }) => (
            <Link href={path} passHref>
              <style.NavItem>
                <Text
                  fontStyleName="body3"
                  color={COLORS.grayscale.gray500}
                  className={isMatchCurrentPage(path) ? 'selected' : ''}
                >
                  {title}
                </Text>
                {icon}
              </style.NavItem>
            </Link>
          ))}
        </style.SectionList>
      </style.Section>
    </style.Wrapper>
  );
};

export default SideNavigationBar;
