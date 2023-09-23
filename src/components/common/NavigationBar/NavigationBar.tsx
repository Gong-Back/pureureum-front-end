import Link from 'next/link';
import { useRouter } from 'next/router';

import PRRMobileLogo from '@/assets/icons/prrMobileLogo.svg';
import { NavInfo, PcNavList } from '@/constants/navigation';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import Button from '../Button';
import * as style from './NavigationBar.style';

interface NavigationBarProps {
  isLogin: boolean;
}

const NavigationBar = ({ isLogin }: NavigationBarProps) => {
  const router = useRouter();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  const isPc = currentBreakpoint === 'pc';

  return (
    <style.Wrapper>
      <PRRMobileLogo
        width="132"
        height="33"
        onClick={() => router.push(NavInfo.home.path)}
      />
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
            onClick={() => router.push('/auth/login')}
          >
            로그인
          </Button>
        )}
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default NavigationBar;
