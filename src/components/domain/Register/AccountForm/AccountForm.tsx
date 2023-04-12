import React from 'react';

import { RegisterFormInput } from '@/constants/types';

import * as style from './AccountForm.style';

export interface AccountFormProps {
  email: string;
  password: string;
  confirmPassword: string;
  isCheckUserEmail: boolean;
  setUserInformation: React.Dispatch<React.SetStateAction<RegisterFormInput>>;
  verifyUserEmail: () => Promise<void>;
}

const AccountForm = ({
  email,
  password,
  confirmPassword,
  isCheckUserEmail,
  setUserInformation,
  verifyUserEmail,
}: AccountFormProps) => {
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setUserInformation((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <style.Wrapper>
      <style.Section>
        <style.Input
          name="email"
          placeholder="아이디"
          value={email}
          width={290}
          onChange={handleUserInput}
          disabled={isCheckUserEmail}
        />
        <style.CheckButton
          onClick={verifyUserEmail}
          isCheckUserEmail={isCheckUserEmail}
        >
          {isCheckUserEmail ? '확인 완료' : '중복 확인'}
        </style.CheckButton>
        <style.Description>8 ~ 15자 영문, 숫자</style.Description>
      </style.Section>
      <style.Section>
        <style.Input
          name="password"
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={handleUserInput}
          disabled={!isCheckUserEmail}
        />
        <style.Description>
          영문, 숫자, 특수 문자 1개 이상 포함, 8자 이상
        </style.Description>
      </style.Section>
      <style.Input
        name="confirmPassword"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        type="password"
        onChange={handleUserInput}
        disabled={!isCheckUserEmail}
      />
    </style.Wrapper>
  );
};

export default AccountForm;
