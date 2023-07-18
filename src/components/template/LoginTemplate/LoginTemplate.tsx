import React from 'react';
import Link from 'next/link';

import PureureumPcLogoSvg from '@/assets/icons/pureureumPcLogo.svg';
import GoogleCircleIconSvg from '@/assets/icons/googleCircleIcon.svg';
import NaverCircleIconSvg from '@/assets/icons/naverCircleIcon.svg';
import KakaoCircleIconSvg from '@/assets/icons/kakaoCircleIcon.svg';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import LoginForm from '@/components/domain/Login/LoginForm';
import { COLORS } from '@/constants/styles';

import * as style from './LoginTemplate.style';

const LoginTemplate = () => (
    <style.Wrapper>
      <style.Header>
        <PureureumPcLogoSvg />
        <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
          로그인해서 재밌는 프로젝트들을 경험해보세요!
        </Text>
      </style.Header>
      <LoginForm />
      <style.Register>
        <style.Section>
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
        </style.Section>
        <style.Section>
          <Text
            fontStyleName="body1R"
            color={COLORS.grayscale.gray500}
            className="description"
          >
            계정이 없다면
          </Text>
          <Link href="/auth/register">
            <Button
              themeColor={COLORS.primary.greenDefault}
              className="register-button"
              isRound
            >
              회원가입
            </Button>
          </Link>
        </style.Section>
      </style.Register>
    </style.Wrapper>
  );
export default LoginTemplate;
