import React from 'react';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import * as style from './LoginForm.style';

interface LoginFormProps {
  /** 아이디로 사용되는 이메일 값 */
  email: string;
  /** 패스워드 값 */
  password: string;
  /** 입력값을 관리하는 함수 */
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** 로그인 버튼을 눌렀을 때 실행되는 함수 */
  submitLogin: () => Promise<void>;
}

/**
 * 로그인 관련 정보를 입력받는 Form 컴포넌트
 */
const LoginForm = ({
  email,
  password,
  handleLoginInput,
  submitLogin,
}: LoginFormProps) => (
  <style.Wrapper>
    <TextInput
      value={email}
      placeholder="E-Mail"
      name="email"
      type="email"
      onChange={handleLoginInput}
      className="login-input"
      isRound
    />
    <TextInput
      value={password}
      placeholder="Password"
      name="password"
      type="password"
      onChange={handleLoginInput}
      className="login-input"
      isRound
    />
    <Button
      onClick={submitLogin}
      className="login-button"
      sizeType="large"
      isFilled
    >
      로그인
    </Button>
  </style.Wrapper>
);

export default LoginForm;
