import Link from 'next/link';

import PureureumMobileLogoSvg from '@/assets/icons/pureureumMobileLogo.svg';
import UserProfile from '@/components/common/UserProfile';
import Text from '@/components/common/Text';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import { COLORS } from '@/constants/styles';
import * as style from './NavigationBar.style';

// FIXME: 추후 페이지 관련 Path 들이 모두 정해진다면 해당 값도 변경해주어야 함.
const NavigationItems = [
  {
    path: '/',
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

  return (
    <style.Wrapper>
      <PureureumMobileLogoSvg />
      <style.NavItemList>
        {isPc &&
          NavigationItems.map(({ path, text }) => (
            <Link href={path} passHref key={text}>
              <Text color={COLORS.grayscale.gray500} fontStyleName="body2R">
                {text}
              </Text>
            </Link>
          ))}
        <UserProfile imageSrc="" nickname="" />
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default NavigationBar;
