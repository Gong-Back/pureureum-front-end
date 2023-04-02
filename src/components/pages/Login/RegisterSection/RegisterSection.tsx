import Link from 'next/link';

import GoogleCircleIconSvg from '@/assets/icons/googleCircleIcon.svg';
import NaverCircleIconSvg from '@/assets/icons/naverCircleIcon.svg';
import KakaoCircleIconSvg from '@/assets/icons/kakaoCircleIcon.svg';

import * as style from './RegisterSection.style';

const RegisterSection = () => (
  <style.Wrapper>
    <style.Section>
      <style.Description>소셜 로그인</style.Description>
      <style.SocialIcons>
        <Link href="/oauth2/google">
          <GoogleCircleIconSvg />
        </Link>
        <Link href="/oauth2/kakao">
          <KakaoCircleIconSvg />
        </Link>
        <Link href="/oauth2/naver">
          <NaverCircleIconSvg />
        </Link>
      </style.SocialIcons>
    </style.Section>
    <style.Section>
      <style.Description>계정이 없다면</style.Description>
      <Link href="/register">
        <style.Button>회원가입</style.Button>
      </Link>
    </style.Section>
  </style.Wrapper>
);

export default RegisterSection;
