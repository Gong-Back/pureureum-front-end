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
    setUserInformation((prev) => ({ ...prev, [name]: value }));
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
        disabled={!!certificationNumber || !isCheckPhoneNumber}
      />
    </style.Wrapper>
  );
};

export default VerifyPhoneNumberForm;
