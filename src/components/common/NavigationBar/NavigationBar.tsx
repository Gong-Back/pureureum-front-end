import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAtom } from 'jotai';

import MenuIcon from '@/assets/icons/menuIcon.svg';
import PRRMobileLogo from '@/assets/icons/prrMobileLogo.svg';
import SocialLoginModal from '@/components/domain/Register/SocialLoginModal';
import { NavInfo, PcNavList } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useModal from '@/hooks/useModal';
import { handleDashboardNavbarVisible } from '@/stores/atom/navigation';

import Button from '../Button';
import * as style from './NavigationBar.style';

interface NavigationBarProps {
  isLogin: boolean;
}

const NavigationBar = ({ isLogin }: NavigationBarProps) => {
  const router = useRouter();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  const { openModal } = useModal();

  const isPc = currentBreakpoint === 'pc';
  const isInMobileDashboard = !isPc && router.asPath.includes('dashboard');

  const [navBarVisible, setNavbarVisible] = useAtom(
    handleDashboardNavbarVisible,
  );

  useEffect(() => {
    setNavbarVisible(isPc);
  }, [isPc, setNavbarVisible]);

  return (
    <style.Wrapper>
      <style.LogoWrapper>
        {isInMobileDashboard && (
          <MenuIcon
            color={COLORS.grayscale.gray700}
            onClick={() => setNavbarVisible(!navBarVisible)}
          />
        )}
        <PRRMobileLogo
          width="132"
          height="33"
          onClick={() => router.push(NavInfo.home.path)}
        />
      </style.LogoWrapper>
      <style.NavItemList>
        {isPc &&
          PcNavList.map((item) => (
            <Link
              passHref
              href={NavInfo[item].path}
              key={NavInfo[item].text}
              className="nav-item"
            >
              {NavInfo[item].text}
            </Link>
          ))}
        {isLogin ? (
          <p>프로필</p>
        ) : (
          <Button
            sizeType="small"
            isRound
            onClick={() => openModal(<SocialLoginModal />)}
          >
            로그인
          </Button>
        )}
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default NavigationBar;
