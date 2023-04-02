import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { AuthRepository } from '@/apis/auth';
import { LoginInput } from '@/constants/types';

import LoginTemplates from '@/components/templates/LoginTemplates';

const Login = () => {
  const router = useRouter();
  const [loginInputs, setLoginInputs] = useState<LoginInput>({
    email: '',
    password: '',
  });
  const { email, password } = loginInputs;

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginInputs((prev) => ({ ...prev, [name]: value }));
  };

  const submitLogin = async () => {
    const response = await AuthRepository.loginAsync(email, password);
    if (response.isSuccess) {
      router.replace('/');
    }
  };

  return (
    <LoginTemplates
      email={email}
      password={password}
      handleLoginInput={handleLoginInput}
      submitLogin={submitLogin}
    />
  );
};
export default Login;
