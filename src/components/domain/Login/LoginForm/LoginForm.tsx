import React from 'react';

import * as style from './LoginForm.style';

interface LoginFormProps {
  email: string;
  password: string;
  handleLoginInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitLogin: () => Promise<void>;
}

const LoginForm = ({
  email,
  password,
  handleLoginInput,
  submitLogin,
}: LoginFormProps) => (
  <style.Wrapper>
    <style.Input
      name="email"
      value={email}
      placeholder="E-Mail"
      type="email"
      onChange={handleLoginInput}
    />
    <style.Input
      name="password"
      value={password}
      placeholder="Password"
      type="password"
      onChange={handleLoginInput}
    />
    <style.Button onClick={submitLogin}>로그인</style.Button>
  </style.Wrapper>
);

export default LoginForm;
