import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { AuthRepository } from '@/apis/auth';
import { RegisterInput, RegisterVerifyInput } from '@/constants/types';

import RegisterTemplate from '@/components/template/RegisterTemplate';

const Register = () => {
  const router = useRouter();
  const feedbackRef = useRef('');

  const [userInfomation, setUserInfomation] = useState<RegisterInput>({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    birthday: '',
    gender: 'MALE',
  });
  const [verifyInformation, setVerifyInformation] =
    useState<RegisterVerifyInput>({
      certificationNumber: undefined,
      typedCertificationNumber: 0,
      isCheckUserId: false,
      isCheckPhoneNumber: false,
    });
  const [currentRegisterStep, setCurrentRegisterStep] = useState(0);

  return (
    <RegisterTemplate
      currentRegisterStep={currentRegisterStep}
      feedbackRef={feedbackRef}
      verifyInformation={verifyInformation}
      userInfomation={userInfomation}
    />
  );
};
export default Register;
