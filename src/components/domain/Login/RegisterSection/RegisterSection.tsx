import Link from 'next/link';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import GoogleCircleIconSvg from '@/assets/icons/googleCircleIcon.svg';
import NaverCircleIconSvg from '@/assets/icons/naverCircleIcon.svg';
import KakaoCircleIconSvg from '@/assets/icons/kakaoCircleIcon.svg';

import { COLORS } from '@/constants/styles';
import * as style from './RegisterSection.style';

const RegisterSection = () => (
  <style.Wrapper>
    <style.Section>
      <Text
        fontStyleName="body1R"
        color={COLORS.grayscale.gray500}
        className="description"
      >
        소셜 로그인
      </Text>
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
  </style.Wrapper>
);

export default RegisterSection;
