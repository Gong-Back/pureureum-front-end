import PCLogoSvg from '@/assets/icons/PCLogo.svg';
import LoginForm from '@/components/pages/Login/LoginForm';
import RegisterSection from '@/components/pages/Login/RegisterSection';

import * as style from './LoginTemplates.style';

export interface LoginTemplatesProps {
  email: string;
  password: string;
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLogin: () => Promise<void>;
}

const LoginTemplates = ({
  email,
  password,
  handleLoginInput,
  submitLogin,
}: LoginTemplatesProps) => (
  <style.Wrapper>
    <style.Header>
      <PCLogoSvg />
      <style.Title>로그인해서 재밌는 프로젝트들을 경험해보세요!</style.Title>
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
export default LoginTemplates;
