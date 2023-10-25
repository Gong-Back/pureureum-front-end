import Link from 'next/link';
import React from 'react';

import GoogleIconSvg from '@/assets/icons/googleIcon.svg';
import KakaoIconSvg from '@/assets/icons/kakaoIcon.svg';
import NaverIconSvg from '@/assets/icons/naverIcon.svg';
import PRRMobileLogo from '@/assets/icons/prrMobileLogo.svg';
import ModalTemplate from '@/components/common/ModalTemplate';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './SocialLoginModal.style';

const SOCIAL_BUTTON_CONTENT = [
  {
    socialType: 'kakao',
    platformName: '카카오',
    textColor: COLORS.grayscale.dark,
    backgroundColor: '#FEE500',
    logo: <KakaoIconSvg />,
  },
  {
    socialType: 'google',
    platformName: '구글',
    textColor: COLORS.grayscale.white,
    backgroundColor: '#4285F4',
    logo: <GoogleIconSvg />,
  },
  {
    socialType: 'naver',
    platformName: '네이버',
    textColor: COLORS.grayscale.white,
    backgroundColor: '#2DB400',
    logo: <NaverIconSvg />,
  },
];

const SocialLoginModal = () => (
  <ModalTemplate title="소셜 로그인 하기">
    <style.Wrapper>
      <style.Header>
        <PRRMobileLogo />
        <Text fontStyleName="body2R" color={COLORS.grayscale.gray500}>
          푸르름에서 다양한 문화 컨텐츠들을 함께 공유해보세요!
        </Text>
      </style.Header>
      <style.RegisterSection>
        <style.ButtonBox>
          {SOCIAL_BUTTON_CONTENT.map(
            ({
              socialType,
              platformName,
              textColor,
              backgroundColor,
              logo,
            }) => (
              <Link href={`/oauth2/${socialType}`} passHref legacyBehavior>
                <style.SocialButton backgroundColor={backgroundColor}>
                  {logo}
                  <Text
                    fontStyleName="body2B"
                    color={textColor}
                  >{`${platformName} 계정으로 로그인`}</Text>
                </style.SocialButton>
              </Link>
            ),
          )}
        </style.ButtonBox>
      </style.RegisterSection>
    </style.Wrapper>
  </ModalTemplate>
);

export default SocialLoginModal;
