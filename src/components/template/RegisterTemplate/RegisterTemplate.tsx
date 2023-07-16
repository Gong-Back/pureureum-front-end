import { useMemo } from 'react';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import AccountForm from '@/components/domain/Register/AccountForm';
import PersonalDataForm from '@/components/domain/Register/PersonalDataForm';
import VerifyPhoneNumberForm from '@/components/domain/Register/VerifyPhoneNumberForm';

import { COLORS } from '@/constants/styles';
import {
  useRegisterContextAction,
  useRegisterContextValue,
} from '@/stores/context/RegisterContext';
import ValidationUtil from '@/utils/validation';

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

const RegisterTemplate = () => {
  const {
    form: {
      email,
      password,
      name,
      phoneNumber,
      birthday,
      confirmPassword,
      typedCertificationNumber,
    },
    verify: { certificationNumber, isCheckPhoneNumber, isCheckUserEmail },
    step,
    fallbackRef,
  } = useRegisterContextValue();
  const { handleCurrentStep } = useRegisterContextAction();

  const { title, subtitle } = RegisterStepHeader[step];

  // 각 Step 별로 다음 스텝으로 넘어가기 위한 최소 조건을 충족했는지를 판별하는 변수 shouldCheckCurrentStep
  const shouldCheckCurrentStep = useMemo(
    () => [
      !!(
        ValidationUtil.validateEmail(email) &&
        isCheckUserEmail &&
        password &&
        password === confirmPassword
      ),
      !!(
        ValidationUtil.validateName(name) &&
        ValidationUtil.validateBirthDay(birthday.join('-'))
      ),
      !!(
        ValidationUtil.validatePhoneNumber(phoneNumber) &&
        isCheckPhoneNumber &&
        certificationNumber === typedCertificationNumber
      ),
    ],
    [
      birthday,
      certificationNumber,
      email,
      name,
      password,
      phoneNumber,
      confirmPassword,
      isCheckPhoneNumber,
      isCheckUserEmail,
      typedCertificationNumber,
    ],
  );

  return (
    <style.Wrapper>
      <style.Header>
        <Text color={COLORS.grayscale.dark} fontStyleName="subtitle1">
          {title}
        </Text>
        <Text color={COLORS.grayscale.gray500} fontStyleName="body1R">
          {subtitle}
        </Text>
      </style.Header>
      <style.VisibleSection>
        <style.Section currentRegisterStep={step}>
          <AccountForm />
          <PersonalDataForm />
          <VerifyPhoneNumberForm />
        </style.Section>
      </style.VisibleSection>
      <style.Footer>
        {fallbackRef ? (
          <style.Feedback>{fallbackRef.current}</style.Feedback>
        ) : null}
        <Button
          themeColor={
            shouldCheckCurrentStep[step]
              ? COLORS.primary.greenDefault
              : COLORS.grayscale.gray400
          }
          isFilled
          onClick={handleCurrentStep}
          sizeType="large"
          className="confirm-button"
        >
          반가워요!
        </Button>
      </style.Footer>
    </style.Wrapper>
  );
};

export default RegisterTemplate;
