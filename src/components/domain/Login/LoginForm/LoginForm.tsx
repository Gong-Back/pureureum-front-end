import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSetAtom } from 'jotai';

import { type ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import {
  useLoginContextValue,
  useLoginContextAction,
} from '@/stores/context/LoginContext';

import * as styles from './LoginForm.style';

/**
 * 로그인 관련 정보를 입력받는 Form 컴포넌트
 */
const LoginForm = () => {
  const router = useRouter();

  const { email, password } = useLoginContextValue();
  const { change, submit, reset } = useLoginContextAction();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, value } = e.target;
    change(type, value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!feedbackMessage) setFeedbackMessage('');
    if (e.key === 'Enter') submitLogin();
  };

  const submitLogin = async () => {
    if (!email || !password) {
      setFeedbackMessage('이메일 혹은 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const { accessToken, refreshToken } = await submit();
      await AuthRepository.setJwtCookieAsync({ accessToken, refreshToken });
      router.replace('/');
    } catch (error) {
      const apiError = error as ApiErrorInstance;
      const [errorMessage] = apiError.messages;
      setFeedbackMessage(errorMessage);
      reset();
    }
  };

  return (
    <styles.Wrapper>
      <TextInput
        value={email}
        placeholder="E-Mail"
        name="email"
        type="email"
        onChange={handleLoginInput}
        onKeyDown={handleOnKeyPress}
        className="login-input"
        isRound
      />
      <TextInput
        value={password}
        placeholder="Password"
        name="password"
        type="password"
        onChange={handleLoginInput}
        onKeyDown={handleOnKeyPress}
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
      {feedbackMessage ? <styles.Feedback>{feedbackMessage}</styles.Feedback> : null}
    </styles.Wrapper>
  );
};

export default LoginForm;
