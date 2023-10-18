import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import MenuIcon from '@/assets/icons/menuIcon.svg';
import Text from '@/components/common/Text';
import { DashboardNavInfo, DashboardNavList } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import * as style from './SideNavigationBar.style';

const SideNavigationBar = () => {
  const router = useRouter();
  const { pid } = router.query;

  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  const isMobile = currentBreakpoint === 'mobile';
  const [isBarVisible, setIsBarVisible] = useState(false);

  // PC 환경에서는 isBarVisible이 무조건 true
  useEffect(() => {
    setIsBarVisible(!isMobile);
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <style.FloatingButton onClick={() => setIsBarVisible((prev) => !prev)}>
          <MenuIcon color={COLORS.grayscale.white} />
        </style.FloatingButton>
      )}
      {isBarVisible && (
        <style.Wrapper isMobile={isMobile}>
          <style.ContentWrapper>
            {DashboardNavList.map((nav) => {
              const { text, icon, path } = DashboardNavInfo[nav];

              return (
                <Link href={{ pathname: path, query: { pid } }}>
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
      )}
    </>
  );
};

export default SideNavigationBar;
