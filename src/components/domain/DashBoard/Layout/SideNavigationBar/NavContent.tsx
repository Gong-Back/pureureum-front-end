import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { DashboardNavInfo, DashboardNavList } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';

import * as style from './SideNavigationBar.style';

const NavContent = () => {
  const router = useRouter();
  const isMatchCurrentPage = (path: string) => path === router.asPath;

  return (
    <style.ContentWrapper>
      {DashboardNavList.map((nav) => {
        const { path, text, icon } = DashboardNavInfo[nav];
        const exactPath = `${router.asPath}/${path}`;

        return (
          <Link href={exactPath} passHref>
            <style.NavItem>
              <Text
                fontStyleName="body3"
                color={COLORS.grayscale.gray500}
                className={isMatchCurrentPage(exactPath) ? 'selected' : ''}
              >
                {text}
              </Text>
              {icon}
            </style.NavItem>
          </Link>
        );
      })}
    </style.ContentWrapper>
  );
};

export default NavContent;
