import { useCallback, useLayoutEffect } from 'react';
import {
  useForm,
  useWatch,
  FormProvider,
  type SubmitHandler,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import { SocialRepository } from '@/apis/social';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import AccountForm from '@/components/domain/Register/AccountForm';
import PersonalDataForm from '@/components/domain/Register/PersonalDataForm';
import VerifyPhoneNumberForm from '@/components/domain/Register/VerifyPhoneNumberForm';

import { COLORS } from '@/constants/styles';
import { type AuthFormType } from '@/constants/types';
import REGISTER_FALLBACK from '@/constants/fallback/register';

import { type RegisterProps } from '@/pages/auth/register';

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

const RegisterTemplate = ({ socialType, socialEmail }: RegisterProps) => {
  const formMethods = useForm<AuthFormType['register']>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      typedCertificationNumber: '',
      name: '',
      phoneNumber: '',
      birthday: [0, 0, 0],
      gender: 'MALE',
      step: 0,
    },
  });
  const {
    control,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  useLayoutEffect(() => {
    if (socialType && socialEmail) {
      setValue('socialType', socialType);
      setValue('email', socialEmail);
      handleCurrentStep();
    }
  }, []);

  const [
    name,
    email,
    confirmPassword,
    password,
    birthday,
    phoneNumber,
    certificationNumber,
    typedCertificationNumber,
    isCheckUserEmail,
    isCheckPhoneNumber,
    currentRegisterStep,
  ] = useWatch({
    control,
    name: [
      'name',
      'email',
      'confirmPassword',
      'password',
      'birthday',
      'phoneNumber',
      'certificationNumber',
      'typedCertificationNumber',
      'isCheckUserEmail',
      'isCheckPhoneNumber',
      'step',
    ],
  });

  const { title, subtitle } = RegisterStepHeader[currentRegisterStep];

  // 각 Step 별로 다음 스텝으로 넘어가기 위한 최소 조건을 충족했는지를 판별하는 변수 shouldCheckCurrentStep
  const shouldCheckCurrentStep = useCallback(() => {
    switch (currentRegisterStep) {
      case 0:
        return !!(
          ValidationUtil.validateEmail(email) &&
          isCheckUserEmail &&
          password &&
          password === confirmPassword
        );
      case 1:
        return !!(
          ValidationUtil.validateName(name) &&
          ValidationUtil.validateBirthDay(birthday.join('-'))
        );
      case 2:
        return !!(
          ValidationUtil.validatePhoneNumber(phoneNumber) &&
          isCheckPhoneNumber &&
          certificationNumber === typedCertificationNumber
        );
      default:
        return false;
    }
  }, [
    currentRegisterStep,
    email,
    isCheckUserEmail,
    password,
    confirmPassword,
    name,
    birthday,
    phoneNumber,
    isCheckPhoneNumber,
    certificationNumber,
    typedCertificationNumber,
  ]);

  const register: SubmitHandler<AuthFormType['register']> = async () => {
    if (!isCheckPhoneNumber) {
      setError('root', { message: REGISTER_FALLBACK.NOT_CHECK_SMS_VERIFY });
      return undefined;
    }
    try {
      // 먼저, SMS 인증이 완료되었다는 사실을 백엔드 서버에 전송해야 한다.
      await AuthRepository.confirmPhoneNumberAsync(phoneNumber);
      // 이후 최종적으로 유저의 정보를 인계하여 회원가입 처리를 완료시킨다.
      const registerFormData = watch();
      const { data: token } = socialType
        ? await SocialRepository.registerAsync({
            ...registerFormData,
            socialType,
          })
        : await AuthRepository.registerAsync(registerFormData);
      return token;
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
        setError('root', { message: errorMessage });
      } else {
        throw error;
      }
      return undefined;
    }
  };

  const handleCurrentStep = () => {
    switch (currentRegisterStep) {
      case 0: {
        // NOTE : OAuth2 로그인일 경우 첫 번째 스텝을 스킵하고 두 번째 스텝으로 넘어간다.
        if (socialType) {
          setValue('step', currentRegisterStep + 1);
          return;
        }
        if (!isCheckUserEmail) {
          setError('root', { message: REGISTER_FALLBACK.NOT_CHECK_EMAIL });
          return;
        }
        if (!ValidationUtil.validatePassword(password)) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_PASSWORD });
          return;
        }
        if (confirmPassword !== password) {
          setError('root', { message: REGISTER_FALLBACK.NOT_MATCH_PASSWORDS });
          return;
        }
        setValue('step', currentRegisterStep + 1);
        break;
      }
      case 1: {
        if (!ValidationUtil.validateName(name)) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_NAME });
          return;
        }
        if (!ValidationUtil.validateBirthDay(birthday.join('-'))) {
          setError('root', { message: REGISTER_FALLBACK.INVALID_BIRTHDAY });
          return;
        }
        setValue('step', currentRegisterStep + 1);
        break;
      }
      case 2: {
        if (!isCheckPhoneNumber) {
          setError('root', { message: REGISTER_FALLBACK.NOT_CHECK_SMS_VERIFY });
          return;
        }
        if (certificationNumber !== typedCertificationNumber) {
          setError('root', {
            message: REGISTER_FALLBACK.NOT_MATCH_CERTIFICATE_NUMBER,
          });
          return;
        }
        handleSubmit(register)();
        break;
      }
      default:
        break;
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
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
          <style.Section currentRegisterStep={currentRegisterStep}>
            <AccountForm control={control} />
            <PersonalDataForm control={control} />
            <VerifyPhoneNumberForm control={control} />
          </style.Section>
        </style.VisibleSection>
        <style.Footer>
          {errors.root ? (
            <style.Feedback>{errors.root.message}</style.Feedback>
          ) : null}
          <Button
            themeColor={
              shouldCheckCurrentStep()
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
    </FormProvider>
  );
};

export default RegisterTemplate;
