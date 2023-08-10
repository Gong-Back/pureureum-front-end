/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useRouter } from 'next/router';
import {
  useForm,
  useWatch,
  FormProvider,
  type SubmitHandler,
} from 'react-hook-form';

import { type ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';

import { type AuthFormType } from '@/constants/types';

import NewTextInput from '@/components/common/TextInput/NewTextInput';
import Button from '@/components/common/Button';

import * as styles from './LoginForm.style';

/**
 * 로그인 관련 정보를 입력받는 Form 컴포넌트
 */
const LoginForm = () => {
  const router = useRouter();
  const formMethods = useForm<AuthFormType['login']>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {
    control,
    reset,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const [email, password] = useWatch({ control, name: ['email', 'password'] });

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubmit(submitLogin)();
  };

  const submitLogin: SubmitHandler<AuthFormType['login']> = async (
    submittedData,
  ) => {
    if (!email || !password) {
      setError('root', { message: '이메일 혹은 비밀번호를 입력해주세요.' });
      return;
    }

    try {
      const {
        data: { accessToken, refreshToken },
      } = await AuthRepository.loginAsync(submittedData);
      await AuthRepository.setJwtCookieAsync({ accessToken, refreshToken });
      router.replace('/');
    } catch (error) {
      const apiError = error as ApiErrorInstance;
      const [errorMessage] = apiError.messages;
      reset({
        email: '',
        password: '',
      });
      setError('root', { message: errorMessage });
    }
  };

  return (
    <FormProvider {...formMethods}>
      <styles.Wrapper>
        <NewTextInput
          placeholder="E-Mail"
          name="email"
          type="email"
          onKeyDown={handleOnKeyPress}
          className="login-input"
          isRound
        />
        <NewTextInput
          placeholder="Password"
          name="password"
          rules={{ required: true }}
          type="password"
          onKeyDown={handleOnKeyPress}
          className="login-input"
          isRound
        />
        <Button
          onClick={handleSubmit(submitLogin)}
          className="login-button"
          sizeType="large"
          isFilled
        >
          로그인
        </Button>
        {errors.root ? (
          <styles.Feedback>{errors.root.message}</styles.Feedback>
        ) : null}
      </styles.Wrapper>
    </FormProvider>
  );
};

export default LoginForm;
