import Link from 'next/link';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { DashboardNavInfo, DashboardNavList } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';

import * as style from './SideNavigationBar.style';

const SideNavigationBar = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <style.Wrapper>
      <style.ContentWrapper>
        {DashboardNavList.map((nav) => {
          const { text, icon, path } = DashboardNavInfo[nav];

          return (
            <Link
              href={{ pathname: path, query: { pid, menu: 'list' } }}
              passHref
            >
              <style.NavItem
                className={path === router.pathname ? 'selected' : ''}
              >
                <Text
                  fontStyleName="body3"
                  color={COLORS.grayscale.gray500}
                  className="label"
                >
                  {text}
                </Text>
                {icon}
              </style.NavItem>
            </Link>
          );
        })}
      </style.ContentWrapper>
    </style.Wrapper>
  );
};

export default SideNavigationBar;
