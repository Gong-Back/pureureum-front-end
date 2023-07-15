import React from 'react';
import PureureumPcLogoSvg from '@/assets/icons/pureureumPcLogo.svg';

import Text from '@/components/common/Text';
import LoginForm from '@/components/domain/Login/LoginForm';
import RegisterSection from '@/components/domain/Login/RegisterSection';

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
    <RegisterSection />
  </style.Wrapper>
);
export default LoginTemplate;
