import React from 'react';

import AccountForm from '@/components/domain/Register/AccountForm';
import PersonalDataForm from '@/components/domain/Register/PersonalDataForm';
import VerifyPhoneNumberForm from '@/components/domain/Register/VerifyPhoneNumberForm';

import { RegisterInput } from '@/constants/types';

import * as style from './RegisterTemplate.style';

// NOTICE : 회원가입 분기 처리를 위해 선언된 상수 RegisterStepContainer
const RegisterStepContainer = {
  first: {
    title: '회원가입',
    subtitle: '사용할 아이디와 비밀번호를 입력해주세요.',
    renderComponent: <AccountForm />,
  },
  second: {
    title: '환영해요 👋',
    subtitle: '당신의 몇 가지 정보가 궁금해요!',
    renderComponent: <PersonalDataForm />,
  },
  last: {
    title: '환영해요 👋',
    subtitle: '마지막으로 사용할 휴대폰 번호를 입력해주세요.',
    renderComponent: <VerifyPhoneNumberForm />,
  },
};

export interface RegisterTemplatesProps {
  currentRegisterStep: 'first' | 'second' | 'last';
  RegisterInfomation: RegisterInput;
  certificationNumber: string | null;
}

const RegisterTemplate = ({
  currentRegisterStep = 'second',
  RegisterInfomation,
  certificationNumber,
}: RegisterTemplatesProps) => {
  const { title, subtitle, renderComponent } =
    RegisterStepContainer[currentRegisterStep];

  return (
    <style.Wrapper>
      <style.Header>
        <style.Title>{title}</style.Title>
        <style.Subtitle>{subtitle}</style.Subtitle>
      </style.Header>
      {renderComponent}
      <style.Footer>
        <style.Feedback>test</style.Feedback>
        <style.ConfirmButton isConfirm={false}>반가워요!</style.ConfirmButton>
      </style.Footer>
    </style.Wrapper>
  );
};

export default RegisterTemplate;
