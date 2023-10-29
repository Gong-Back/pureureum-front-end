import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { MYPAGE_NAVIGATION_CONTENT } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';

import * as style from './SideNavigationBar.style';

const NavContent = () => {
  const router = useRouter();
  const isMatchCurrentPage = (path: string) => path === router.pathname;

  return (
    <style.ContentWrapper>
      {MYPAGE_NAVIGATION_CONTENT.map(({ label, contents }) => (
        <style.Section>
          <Text
            fontStyleName="body2B"
            color={COLORS.grayscale.gray700}
            className="section-title"
          >
            {label}
          </Text>
          <style.SectionList>
            {contents.map(({ title, icon, path }) => (
              <Link href={path} passHref>
                <style.NavItem
                  className={isMatchCurrentPage(path) ? 'selected' : ''}
                >
                  <Text
                    fontStyleName="body3"
                    color={
                      isMatchCurrentPage(path)
                        ? COLORS.grayscale.gray700
                        : COLORS.grayscale.gray500
                    }
                  >
                    {title}
                  </Text>
                  {icon}
                </style.NavItem>
              </Link>
            ))}
          </style.SectionList>
        </style.Section>
      ))}
    </style.ContentWrapper>
  );
};

export default NavContent;
