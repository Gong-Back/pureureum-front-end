import React from 'react';
import { useFormContext } from 'react-hook-form';

import { type AuthFormType } from '@/constants/types';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import {
  useRegisterContextAction,
  useRegisterContextValue,
} from '@/stores/context/RegisterContext';

import * as style from './VerifyPhoneNumberForm.style';

const VerifyPhoneNumberForm = () => {
  const formMethods = useFormContext<AuthFormType['register']>();
  const {
    getValues,
    setValue,
    formState: { errors },
  } = formMethods;

  const [
    phoneNumber,
    certificationNumber,
    typedCertificationNumber,
    isCheckPhoneNumber,
  ] = getValues([
    'phoneNumber',
    'certificationNumber',
    'typedCertificationNumber',
    'isCheckPhoneNumber',
  ]);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isPhoneNumber = name === 'phoneNumber';

    // 숫자가 아닌 값은 전부 날리고, 전화번호 (최대 11자) 와 인증번호 (최대 6자) 에 맞게 자른다.
    let formattedValue = value
      .replace(/[^0-9]/g, '')
      .slice(0, isPhoneNumber ? 11 : 6);
    // 전화번호의 경우, 숫자만을 입력 받게 하며 자동으로 하이픈 (-) 을 추가시킴.
    if (isPhoneNumber)
      formattedValue = formattedValue.replace(
        /^(\d{2,3})(\d{3,4})(\d{4})$/,
        `$1-$2-$3`,
      );
    change(name, formattedValue);
  };

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          fieldId="phoneNumber"
          placeholder="핸드폰 번호"
          value={phoneNumber}
          width={269}
          onChange={handleUserInput}
          disabled={isCheckPhoneNumber}
          isRound
        />
        <Button onClick={verifyPhoneNumber} isFilled>
          인증번호 요청
        </Button>
      </style.Section>
      <TextInput
        name="typedCertificationNumber"
        placeholder="인증번호"
        value={typedCertificationNumber}
        onChange={handleUserInput}
        disabled={!certificationNumber}
        isRound
      />
    </style.Wrapper>
  );
};

export default VerifyPhoneNumberForm;
