import { useEffect, useState } from 'react';

import MenuIcon from '@/assets/icons/menuIcon.svg';
import { COLORS } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import NavContent from './NavContent';
import * as style from './SideNavigationBar.style';

const SideNavigationBar = () => {
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
          <NavContent />
        </style.Wrapper>
      )}
    </>
  );
};

export default SideNavigationBar;
