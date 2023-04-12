import React from 'react';

import { RegisterFormInput } from '@/constants/types';

import * as style from './VerifyPhoneNumberForm.style';

export interface VerifyPhoneNumberFormProps {
  phoneNumber: string;
  certificationNumber: string | undefined;
  typedCertificationNumber: string;
  isCheckPhoneNumber: boolean;
  setUserInformation: React.Dispatch<React.SetStateAction<RegisterFormInput>>;
  verifyPhoneNumber: () => Promise<void>;
}

const VerifyPhoneNumberForm = ({
  phoneNumber,
  certificationNumber,
  typedCertificationNumber,
  isCheckPhoneNumber,
  setUserInformation,
  verifyPhoneNumber,
}: VerifyPhoneNumberFormProps) => {
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
    setUserInformation((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  return (
    <style.Wrapper>
      <style.Section>
        <style.Input
          name="phoneNumber"
          placeholder="핸드폰 번호"
          value={phoneNumber}
          width={269}
          onChange={handleUserInput}
          disabled={isCheckPhoneNumber}
        />
        <style.CheckButton onClick={verifyPhoneNumber}>
          인증번호 요청
        </style.CheckButton>
      </style.Section>
      <style.Input
        name="typedCertificationNumber"
        placeholder="인증번호"
        value={typedCertificationNumber}
        onChange={handleUserInput}
        disabled={!certificationNumber}
      />
    </style.Wrapper>
  );
};

export default VerifyPhoneNumberForm;
