import { useRouter } from 'next/router';

import MobileLogoSvg from '@/assets/icons/MobileLogo.svg';
import UserProfile from '@/components/common/UserProfile';

import * as style from './Navigation.style';

const Navigation = () => {
  const router = useRouter();

  const handleMoveToPath = (path: string) => {
    router.push(path);
  };

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

  return (
    <style.Wrapper>
      <MobileLogoSvg />
      <style.NavItemList>
        {NavigationItems.map(({ path, text }) => (
          <style.NavItem key={text} onClick={() => handleMoveToPath(path)}>
            {text}
          </style.NavItem>
        ))}
        <UserProfile imageSrc="" nickname="" />
      </style.NavItemList>
    </style.Wrapper>
  );
};

export default Navigation;
