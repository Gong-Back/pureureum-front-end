import Link from 'next/link';

import PureureumMobileLogoSvg from '@/assets/icons/pureureumMobileLogo.svg';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import { useRouter } from 'next/router';
import * as style from './NavigationBar.style';
import Button from '../Button';

// FIXME: 추후 페이지 관련 Path 들이 모두 정해진다면 해당 값도 변경해주어야 함.
const NavigationItems = [
  {
    path: '/mypage/project/pending',
    text: '나의 푸르름',
  },
  {
    path: '/project',
    text: '프로젝트',
  },
  {
    path: '/community',
    text: '커뮤니티',
  },
  {
    path: '/qna',
    text: '고객센터 및 문의',
  },
];

const NavigationBar = () => {
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  const isPc = currentBreakpoint === 'pc';

  const router = useRouter();

  return (
    <style.Wrapper>
      <PureureumMobileLogoSvg onClick={() => router.push('/')} />
      <style.NavItemList>
        {isPc &&
          NavigationItems.map(({ path, text }) => (
            <Link passHref href={path} key={text} className="nav-item">
              {text}
            </Link>
          ))}
        <Button isRound onClick={() => router.push('/auth/login')}>
          로그인
        </Button>
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default NavigationBar;
