import Link from 'next/link';
import React from 'react';

import GoogleCircleIconSvg from '@/assets/icons/googleCircleIcon.svg';
import KakaoCircleIconSvg from '@/assets/icons/kakaoCircleIcon.svg';
import NaverCircleIconSvg from '@/assets/icons/naverCircleIcon.svg';
import PrrPcLogoSvg from '@/assets/icons/prrPcLogo.svg';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './LoginTemplate.style';

const LoginTemplate = () => (
  <style.Wrapper>
    <style.Header>
      <PrrPcLogoSvg />
      <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
        로그인해서 재밌는 프로젝트들을 경험해보세요!
      </Text>
    </style.Header>
      <style.RegisterSection>
        <Text
          fontStyleName="body1R"
          color={COLORS.grayscale.gray500}
          className="description"
        >
          소셜 로그인
        </Text>
        <style.SocialIcons>
          <Link href="/oauth2/google" passHref legacyBehavior>
            <GoogleCircleIconSvg />
          </Link>
          <Link href="/oauth2/kakao" passHref legacyBehavior>
            <KakaoCircleIconSvg />
          </Link>
          <Link href="/oauth2/naver" passHref legacyBehavior>
            <NaverCircleIconSvg />
          </Link>
        </style.SocialIcons>
      </style.RegisterSection>
  </style.Wrapper>
);
export default LoginTemplate;
