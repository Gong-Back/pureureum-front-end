import React from 'react';
import PureureumPcLogoSvg from '@/assets/icons/pureureumPcLogo.svg';

import Text from '@/components/common/Text';
import LoginForm from '@/components/domain/Login/LoginForm';
import RegisterSection from '@/components/domain/Login/RegisterSection';

import { COLORS } from '@/constants/styles';
import * as style from './LoginTemplate.style';

export interface LoginTemplatesProps {
  email: string;
  password: string;
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLogin: () => Promise<void>;
}

const LoginTemplate = ({
  email,
  password,
  handleLoginInput,
  submitLogin,
}: LoginTemplatesProps) => (
  <style.Wrapper>
    <style.Header>
      <PureureumPcLogoSvg />
      <Text fontStyleName="body1R" color={COLORS.grayscale.gray500}>
        로그인해서 재밌는 프로젝트들을 경험해보세요!
      </Text>
    </style.Header>
    <LoginForm
      email={email}
      password={password}
      handleLoginInput={handleLoginInput}
      submitLogin={submitLogin}
    />
    <RegisterSection />
  </style.Wrapper>
);
export default LoginTemplate;
