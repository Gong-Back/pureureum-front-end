import React from 'react';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { RegisterFormInput } from '@/constants/types';
import { COLORS } from '@/constants/styles';
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
        <TextInput
          name="email"
          placeholder="아이디"
          value={email}
          onChange={handleUserInput}
          disabled={isCheckUserEmail}
          isRound
          className="account-input email-input"
        />
        <Button
          onClick={verifyUserEmail}
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
          name="password"
          placeholder="비밀번호"
          value={password}
          type="password"
          onChange={handleUserInput}
          disabled={!isCheckUserEmail}
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
        name="confirmPassword"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        type="password"
        onChange={handleUserInput}
        disabled={!isCheckUserEmail}
        isRound
        className="account-input"
      />
    </style.Wrapper>
  );
};

export default AccountForm;
