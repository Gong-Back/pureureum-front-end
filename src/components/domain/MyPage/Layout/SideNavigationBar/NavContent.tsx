import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { MyPageNavInfo } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';

import * as style from './SideNavigationBar.style';

const NavContent = () => {
  const router = useRouter();
  const isMatchCurrentPage = (path: string) => path === router.pathname;
  return (
    <style.ContentWrapper>
      <style.Section>
        <Text
          fontStyleName="body2B"
          color={COLORS.grayscale.gray700}
          className="section-title"
        >
          프로젝트
        </Text>
        <style.SectionList>
          {MyPageNavInfo.project.map(({ title, icon, path }) => (
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
          {MyPageNavInfo.personal.map(({ title, icon, path }) => (
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
          {MyPageNavInfo.operation.map(({ title, icon, path }) => (
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
    </style.ContentWrapper>
  );
};

export default NavContent;
