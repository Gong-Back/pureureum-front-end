import React from 'react';

import AccountForm from '@/components/domain/Register/AccountForm';
import PersonalDataForm from '@/components/domain/Register/PersonalDataForm';
import VerifyPhoneNumberForm from '@/components/domain/Register/VerifyPhoneNumberForm';

import { RegisterFormInput, RegisterVerifyInput } from '@/constants/types';

import * as style from './RegisterTemplate.style';

const RegisterStepHeader = [
  {
    title: '회원가입',
    subtitle: '사용할 아이디와 비밀번호를 입력해주세요.',
  },
  {
    title: '환영해요 👋',
    subtitle: '당신의 몇 가지 정보가 궁금해요!',
  },
  {
    title: '환영해요 👋',
    subtitle: '마지막으로 사용할 휴대폰 번호를 입력해주세요.',
  },
];

export interface RegisterTemplatesProps {
  currentRegisterStep: number;
  feedbackRef: React.MutableRefObject<HTMLParagraphElement>;
  verifyInformation: RegisterVerifyInput;
  userInformation: RegisterFormInput;
  handleNextRegisterStep: () => void;
  setUserInformation: React.Dispatch<React.SetStateAction<RegisterFormInput>>;
  shouldCheckCurrentStep: boolean[];
  verifyUserEmail: () => Promise<void>;
  verifyPhoneNumber: () => Promise<void>;
}

const RegisterTemplate = ({
  currentRegisterStep = 0,
  feedbackRef,
  verifyInformation,
  userInformation,
  handleNextRegisterStep,
  setUserInformation,
  shouldCheckCurrentStep,
  verifyUserEmail,
  verifyPhoneNumber,
}: RegisterTemplatesProps) => {
  const { title, subtitle } = RegisterStepHeader[currentRegisterStep];

  return (
    <style.Wrapper>
      <style.Header>
        <style.Title>{title}</style.Title>
        <style.Subtitle>{subtitle}</style.Subtitle>
      </style.Header>
      <style.VisibleSection>
        <style.Section currentRegisterStep={currentRegisterStep}>
          <AccountForm
            email={userInformation.email}
            password={userInformation.password}
            confirmPassword={userInformation.confirmPassword}
            isCheckUserEmail={verifyInformation.isCheckUserEmail}
            setUserInformation={setUserInformation}
            verifyUserEmail={verifyUserEmail}
          />
          <PersonalDataForm
            name={userInformation.name}
            gender={userInformation.gender}
            setUserInformation={setUserInformation}
          />
          <VerifyPhoneNumberForm
            phoneNumber={userInformation.phoneNumber}
            certificationNumber={verifyInformation.certificationNumber}
            typedCertificationNumber={userInformation.typedCertificationNumber}
            isCheckPhoneNumber={verifyInformation.isCheckPhoneNumber}
            setUserInformation={setUserInformation}
            verifyPhoneNumber={verifyPhoneNumber}
          />
        </style.Section>
      </style.VisibleSection>
      <style.Footer>
        <style.Feedback ref={feedbackRef} />
        <style.ConfirmButton
          onClick={handleNextRegisterStep}
          isConfirm={shouldCheckCurrentStep[currentRegisterStep]}
        >
          반가워요!
        </style.ConfirmButton>
      </style.Footer>
    </style.Wrapper>
  );
};

export default RegisterTemplate;
