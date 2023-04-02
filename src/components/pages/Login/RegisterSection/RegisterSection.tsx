import GoogleCircleIconSvg from '@/assets/icons/googleCircleIcon.svg';
import NaverCircleIconSvg from '@/assets/icons/naverCircleIcon.svg';
import KakaoCircleIconSvg from '@/assets/icons/kakaoCircleIcon.svg';

import * as style from './RegisterSection.style';

const RegisterSection = () => (
  <style.Wrapper>
    <style.Section>
      <style.Description>소셜 로그인</style.Description>
      <style.SocialIcons>
        <GoogleCircleIconSvg />
        <NaverCircleIconSvg />
        <KakaoCircleIconSvg />
      </style.SocialIcons>
    </style.Section>
    <style.Section>
      <style.Description>계정이 없다면</style.Description>
      <style.Button>회원가입</style.Button>
    </style.Section>
  </style.Wrapper>
);

export default RegisterSection;
