import React from 'react';
import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import {
  useLoginContextValue,
  useLoginContextAction,
} from '@/stores/context/LoginContext';
import { handleTokenAtom } from '@/stores/atom/token/actions';

import * as style from './LoginForm.style';

/**
 * 로그인 관련 정보를 입력받는 Form 컴포넌트
 */
const LoginForm = () => {
  const router = useRouter();

  const { email, password } = useLoginContextValue();
  const { change, submit, reset } = useLoginContextAction();
  const handleToken = useSetAtom(handleTokenAtom);

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    change(type, value);
  };

  const submitLogin = async () => {
    if (!email || !password) return;

    try {
      const { accessToken, refreshToken } = await submit();
      handleToken({ action: 'LOGIN', value: { accessToken, refreshToken } });
      router.replace('/');
    } catch (err) {
      reset();
    }
  };

  return (
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
};

export default LoginForm;
