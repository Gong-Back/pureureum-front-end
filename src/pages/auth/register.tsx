import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { AuthRepository } from '@/apis/auth';
import { RegisterFormInput, RegisterVerifyInput } from '@/constants/types';
import ValidationUtil from '@/utils/validation';

import RegisterTemplate from '@/components/template/RegisterTemplate';

const Register = () => {
  const router = useRouter();
  // NOTICE : Form Validation fail 시 피드백 메세지를 제공하기 위한 ref
  const feedbackRef =
    useRef<HTMLParagraphElement>() as React.MutableRefObject<HTMLParagraphElement>;

  const [userInformation, setUserInformation] = useState<RegisterFormInput>({
    email: '',
    password: '',
    confirmPassword: '',
    typedCertificationNumber: '',
    name: '',
    phoneNumber: '',
    birthday: '',
    gender: 'MALE',
  });
  const [verifyInformation, setVerifyInformation] =
    useState<RegisterVerifyInput>({
      certificationNumber: undefined,
      isCheckUserEmail: false,
      isCheckPhoneNumber: false,
    });
  const [currentRegisterStep, setCurrentRegisterStep] = useState(0);

  const { isCheckUserEmail, isCheckPhoneNumber, certificationNumber } =
    verifyInformation;
  const {
    email,
    password,
    name,
    phoneNumber,
    birthday,
    gender,
    confirmPassword,
    typedCertificationNumber,
  } = userInformation;

  // 이메일 중복 체크를 진행하는 함수 verifyUserEmail
  const verifyUserEmail = async () => {
    if (isCheckUserEmail) {
      feedbackRef.current.innerText = '이미 이메일 인증을 마친 상태입니다.';
      return;
    }
    if (!ValidationUtil.validateEmail(email)) {
      feedbackRef.current.innerText =
        '아이디는 8자 이상 15자 미만의 영문, 숫자로만 가능합니다.';
      return;
    }
    const response = await AuthRepository.verifyEmailAsync(email);
    if (response.isSuccess) {
      setVerifyInformation((prev) => ({ ...prev, isCheckUserEmail: true }));
      feedbackRef.current.innerText = '';
      return;
    }
    const [errorMessage] = response.result.messages;
    feedbackRef.current.innerText = errorMessage;
  };

  // SMS 문자 인증 번호를 검사하여 정상적으로 인증되었는지를 판별하는 함수 verifyPhoneNumber
  const verifyPhoneNumber = async () => {
    if (isCheckPhoneNumber) {
      feedbackRef.current.innerText = '이미 SMS 인증 문자를 전송하였습니다.';
      return;
    }
    if (!ValidationUtil.validatePhoneNumber(phoneNumber)) {
      feedbackRef.current.innerText = '올바른 핸드폰 번호 양식이 아닙니다.';
      return;
    }
    const response = await AuthRepository.verifyPhoneNumberAsync(phoneNumber);
    if (response.isSuccess) {
      setVerifyInformation((prev) => ({
        ...prev,
        certificationNumber: response.result.data?.certificationNumber,
        isCheckPhoneNumber: true,
      }));
      return;
    }
    const [errorMessage] = response.result.messages;
    feedbackRef.current.innerText = errorMessage;
  };

  // 현재 회원가입 단계를 정상적으로 완료하였는지를 체크하는 함수 handleNextRegisterStep
  const handleNextRegisterStep = () => {
    if (currentRegisterStep === 0) {
      if (!isCheckUserEmail) {
        feedbackRef.current.innerText =
          '아직 아이디 중복 검사를 진행하지 않았습니다.';
        return;
      }
      if (!ValidationUtil.validatePassword(password)) {
        feedbackRef.current.innerText =
          '비밀번호는 영문, 숫자, 특문을 1개 이상 포함해 8자 이상이어야 합니다.';
        return;
      }
      if (confirmPassword !== password) {
        feedbackRef.current.innerText =
          '입력하신 비밀번호와 확인용 비밀번호가 일치하지 않습니다.';
        return;
      }
      feedbackRef.current.innerText = '';
      setCurrentRegisterStep((prev) => prev + 1);
    } else if (currentRegisterStep === 1) {
      if (!ValidationUtil.validateName(name)) {
        feedbackRef.current.innerText =
          '유효하지 않은 이름입니다. 한글 혹은 영문명을 작성해주세요.';
        return;
      }
      if (!ValidationUtil.validateBirthDay(birthday)) {
        feedbackRef.current.innerText =
          '유효하지 않은 생년월일입니다. 정확하게 입력해주세요';
        return;
      }
      feedbackRef.current.innerText = '';
      setCurrentRegisterStep((prev) => prev + 1);
    } else {
      if (!isCheckPhoneNumber) {
        feedbackRef.current.innerText = '아직 SMS 인증을 진행하지 않았습니다.';
        return;
      }
      if (certificationNumber !== typedCertificationNumber) {
        feedbackRef.current.innerText = '입력한 인증번호가 일치하지 않습니다.';
        return;
      }
      confirmRegister();
    }
  };

  // 회원가입 처리를 최종적으로 완료하는 함수 confirmRegister
  const confirmRegister = async () => {
    if (!isCheckPhoneNumber) {
      feedbackRef.current.innerText = '아직 SMS 인증을 진행하지 않았습니다.';
      return;
    }
    // 먼저, SMS 인증이 완료되었다는 사실을 백엔드 서버에 전송해야 한다.
    const confirmPhoneNumberResponse =
      await AuthRepository.confirmPhoneNumberAsync(phoneNumber);
    if (!confirmPhoneNumberResponse.isSuccess) {
      const [errorMessage] = confirmPhoneNumberResponse.result.messages;
      feedbackRef.current.innerText = errorMessage;
      return;
    }
    // 이후 최종적으로 유저의 정보를 인계하여 회원가입 처리를 완료시킨다.
    const response = await AuthRepository.registerAsync(
      email,
      password,
      name,
      phoneNumber,
      birthday,
      gender,
    );
    if (!response.isSuccess) {
      const [errorMessage] = response.result.messages;
      feedbackRef.current.innerText = errorMessage;
      return;
    }
    router.replace('/auth/login');
  };

  // 각 Step 별로 다음 스텝으로 넘어가기 위한 최소 조건을 충족했는지를 판별하는 변수 shouldCheckCurrentStep
  const shouldCheckCurrentStep = [
    !!(
      ValidationUtil.validateEmail(email) &&
      isCheckUserEmail &&
      password &&
      password === confirmPassword
    ),
    !!(
      ValidationUtil.validateName(name) &&
      ValidationUtil.validateBirthDay(birthday)
    ),
    !!(
      ValidationUtil.validatePhoneNumber(phoneNumber) &&
      isCheckPhoneNumber &&
      certificationNumber === typedCertificationNumber
    ),
  ];

  return (
    <RegisterTemplate
      currentRegisterStep={currentRegisterStep}
      feedbackRef={feedbackRef}
      verifyInformation={verifyInformation}
      userInformation={userInformation}
      handleNextRegisterStep={handleNextRegisterStep}
      setUserInformation={setUserInformation}
      shouldCheckCurrentStep={shouldCheckCurrentStep}
      verifyUserEmail={verifyUserEmail}
      verifyPhoneNumber={verifyPhoneNumber}
    />
  );
};
export default Register;
