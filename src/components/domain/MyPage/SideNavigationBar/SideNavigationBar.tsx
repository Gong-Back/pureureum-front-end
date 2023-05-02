import Link from 'next/link';
import { useRouter } from 'next/router';

import CocoNoteDeleteIcon from '@/assets/icons/noteDeleteIcon.svg';
import CocoNoteIcon from '@/assets/icons/noteIcon.svg';
import CocoNotificationIcon from '@/assets/icons/notificationIcon.svg';
import CocoNotificationBellIcon from '@/assets/icons/notificationBellIcon.svg';
import CocoSavedIcon from '@/assets/icons/savedIcon.svg';
import CocoUserIcon from '@/assets/icons/userIcon.svg';
import CocoPresentationIcon from '@/assets/icons/presentationIcon.svg';

import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
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
      title: '작성한 글 관리',
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
          {sideNavigationElement.project.map(({ title, icon, path }) => (
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
          {sideNavigationElement.personal.map(({ title, icon, path }) => (
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
          {sideNavigationElement.operation.map(({ title, icon, path }) => (
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
