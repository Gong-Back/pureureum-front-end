import React from 'react';
import { type Control, useFormContext, useWatch } from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
import { type AuthFormType } from '@/constants/types';
import REGISTER_FALLBACK from '@/constants/fallback/register';

import ValidationUtil from '@/utils/validation';

import * as style from './AccountForm.style';

interface AccountFormProps {
  control: Control<AuthFormType['register']>;
}

const AccountForm = ({ control }: AccountFormProps) => {
  const { setValue, setError, watch } =
    useFormContext<AuthFormType['register']>();

  const [email, isCheckUserEmail] = useWatch({
    control,
    name: ['email', 'isCheckUserEmail'],
  });

  const verifyEmail = async () => {
    if (isCheckUserEmail) {
      setError('root', { message: REGISTER_FALLBACK.NOT_CHECK_EMAIL });
      return;
    }
    console.log(!ValidationUtil.validateEmail(email));
    if (!ValidationUtil.validateEmail(email)) {
      setError('root', { message: REGISTER_FALLBACK.INVALID_EMAIL });
      return;
    }
    try {
      await AuthRepository.verifyEmailAsync(email);
      setValue('isCheckUserEmail', true);
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
        setError('root', { message: errorMessage });
        return;
      }
      throw error;
    }
  };

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          fieldId="email"
          fieldOption={{ required: true, minLength: 1 }}
          placeholder="아이디"
          disabled={isCheckUserEmail}
          isRound
          className="account-input email-input"
        />
        <Button
          onClick={verifyEmail}
          isFilled
          themeColor={
            isCheckUserEmail
              ? COLORS.grayscale.gray400
              : COLORS.primary.greenDefault
          }
          className="check-button"
        >
          {isCheckUserEmail ? '확인 완료' : '중복 확인'}
        </Button>
        <Text
          fontStyleName="caption"
          color={COLORS.grayscale.gray400}
          className="description"
        >
          8 ~ 15자 영문, 숫자
        </Text>
      </style.Section>
      <style.Section>
        <TextInput
          fieldId="password"
          fieldOption={{
            required: true,
            minLength: 1,
            disabled: !isCheckUserEmail,
          }}
          placeholder="비밀번호"
          type="password"
          isRound
          className="account-input"
        />
        <Text
          fontStyleName="caption"
          color={COLORS.grayscale.gray400}
          className="description"
        >
          영문, 숫자, 특수 문자 1개 이상 포함, 8자 이상
        </Text>
      </style.Section>
      <TextInput
        fieldId="confirmPassword"
        fieldOption={{
          required: true,
          minLength: 1,
          disabled: !isCheckUserEmail,
        }}
        placeholder="비밀번호 확인"
        type="password"
        disabled={!isCheckUserEmail}
        isRound
        className="account-input"
      />
    </style.Wrapper>
  );
};

export default AccountForm;
