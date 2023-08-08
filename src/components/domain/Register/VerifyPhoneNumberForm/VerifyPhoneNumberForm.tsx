import React from 'react';
import { type Control, useFormContext, useWatch } from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';

import { type AuthFormType } from '@/constants/types';
import REGISTER_FALLBACK from '@/constants/fallback/register';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';

import ValidationUtil from '@/utils/validation';

import * as style from './VerifyPhoneNumberForm.style';

interface VerifyPhoneNumberFormProps {
  control: Control<AuthFormType['register']>;
}

const VerifyPhoneNumberForm = ({ control }: VerifyPhoneNumberFormProps) => {
  const { setError, setValue } =
    useFormContext<AuthFormType['register']>();

  const [certificationNumber, phoneNumber, isCheckPhoneNumber] = useWatch({
    control,
    name: ['certificationNumber', 'phoneNumber', 'isCheckPhoneNumber'],
  });

  const verifyPhoneNumber = async () => {
    if (isCheckPhoneNumber) {
      setError('root', { message: REGISTER_FALLBACK.ALREADY_VERIFY_SMS });
      return;
    }
    if (!ValidationUtil.validatePhoneNumber(phoneNumber)) {
      setError('root', { message: REGISTER_FALLBACK.INVALID_PHONE_NUMBER });
      return;
    }
    try {
      const { data } = await AuthRepository.verifyPhoneNumberAsync(phoneNumber);
      setValue('certificationNumber', data.certificationNumber);
      setValue('isCheckPhoneNumber', true);
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
        setError('root', { message: errorMessage });
      }
      throw error;
    }
  };

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          fieldId="phoneNumber"
          fieldOption={{
            required: true,
            disabled: isCheckPhoneNumber,
            setValueAs: (value: string) =>
              value
                .replace(/[^0-9]/g, '')
                .slice(0, 11)
                .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
            pattern: {
              value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
              message: REGISTER_FALLBACK.INVALID_PHONE_NUMBER,
            },
          }}
          placeholder="핸드폰 번호"
          width={269}
          isRound
        />
        <Button onClick={verifyPhoneNumber} isFilled>
          인증번호 요청
        </Button>
      </style.Section>
      <TextInput
        fieldId="typedCertificationNumber"
        fieldOption={{ required: true, disabled: !certificationNumber }}
        placeholder="인증번호"
        isRound
      />
    </style.Wrapper>
  );
};

export default VerifyPhoneNumberForm;
