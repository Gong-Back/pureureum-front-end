import React from 'react';

import {
  AccountForm,
  AccountFormProps,
} from '@/components/domain/Register/AccountForm';
import {
  PersonalDataForm,
  PersonalDataFormProps,
} from '@/components/domain/Register/PersonalDataForm';
import {
  VerifyPhoneNumberForm,
  VerifyPhoneNumberFormProps,
} from '@/components/domain/Register/VerifyPhoneNumberForm';

import { RegisterInput, RegisterVerifyInput } from '@/constants/types';

import * as style from './RegisterTemplate.style';

const RegisterStepContainer = [
  {
    title: '회원가입',
    subtitle: '사용할 아이디와 비밀번호를 입력해주세요.',
    form: ({ id, password, isCheckUserId }: AccountFormProps) => (
      <AccountForm id={id} password={password} isCheckUserId={isCheckUserId} />
    ),
  },
  {
    title: '환영해요 👋',
    subtitle: '당신의 몇 가지 정보가 궁금해요!',
    form: ({ name, birthday, gender }: PersonalDataFormProps) => (
      <PersonalDataForm name={name} birthday={birthday} gender={gender} />
    ),
  },
  {
    title: '환영해요 👋',
    subtitle: '마지막으로 사용할 휴대폰 번호를 입력해주세요.',
    form: ({
      phoneNumber,
      certificationNumber,
      isCheckPhoneNumber,
    }: VerifyPhoneNumberFormProps) => (
      <VerifyPhoneNumberForm
        phoneNumber={phoneNumber}
        certificationNumber={certificationNumber}
        isCheckPhoneNumber={isCheckPhoneNumber}
      />
    ),
  },
];

export interface RegisterTemplatesProps {
  currentRegisterStep: number;
  feedbackRef: React.MutableRefObject<string>;
  verifyInformation: RegisterVerifyInput;
  userInfomation: RegisterInput;
}

const RegisterTemplate = ({
  currentRegisterStep = 0,
  feedbackRef,
  verifyInformation,
  userInfomation,
}: RegisterTemplatesProps) => {
  const { title, subtitle, form } = RegisterStepContainer[currentRegisterStep];

  return (
    <style.Wrapper>
      <style.Header>
        <style.Title>{title}</style.Title>
        <style.Subtitle>{subtitle}</style.Subtitle>
      </style.Header>
      {/** NOTICE : 유저 정보와 인증 정보를 모두 인자로 넘기되, 필요한 값만 취하는 형식으로 작성 */}
      {form({ ...verifyInformation, ...userInfomation })}
      <style.Footer>
        <style.Feedback>{feedbackRef.current}</style.Feedback>
        <style.ConfirmButton isConfirm={false}>반가워요!</style.ConfirmButton>
      </style.Footer>
    </style.Wrapper>
  );
};

export default RegisterTemplate;
