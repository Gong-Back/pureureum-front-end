import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { AuthRepository } from '@/apis/auth';
import { RegisterInput } from '@/constants/types';

import RegisterTemplate from '@/components/template/RegisterTemplate';

type RegisterStepType = 'first' | 'second' | 'last';

const Register = () => {
  const router = useRouter();

  const [registerInfomation, setRegisterInfomation] = useState<RegisterInput>({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    birthday: '',
    gender: 'MALE',
  });
  const [certificationNumber, setCertificationNumber] = useState<string | null>(
    null,
  );
  const [currentRegisterStep, setCurrentRegisterStep] =
    useState<RegisterStepType>('second');

  const handleRegisterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterInfomation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <RegisterTemplate
      RegisterInfomation={registerInfomation}
      currentRegisterStep={currentRegisterStep}
      certificationNumber={certificationNumber}
    />
  );
};
export default Register;
