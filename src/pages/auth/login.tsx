import React, { useState } from 'react';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

import { AuthRepository } from '@/apis/auth';
import { LoginInput } from '@/constants/types';
import { authTokenAtom } from '@/stores/atoms';

import LoginTemplate from '@/components/template/LoginTemplate';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false, // NOTICE: 빌드 과정에서 네비게이션 바를 보이지 않게 설정.
    },
  };
}

const Login = () => {
  const router = useRouter();
  const setAuthToken = useSetAtom(authTokenAtom);
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
      setAuthToken({ ...response.result.data });
      router.replace('/');
    }
  };

  return (
    <LoginTemplate
      email={email}
      password={password}
      handleLoginInput={handleLoginInput}
      submitLogin={submitLogin}
    />
  );
};
export default Login;
