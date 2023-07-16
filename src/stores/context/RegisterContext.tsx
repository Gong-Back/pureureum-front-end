import {
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
  type PropsWithChildren,
  type MutableRefObject,
} from 'react';

import { type ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import { SocialRepository } from '@/apis/social';
import {
  AuthResponses,
  GenderType,
  SocialPlatformType,
} from '@/constants/types';
import REGISTER_FALLBACK from '@/constants/fallback/register';
import ValidationUtil from '@/utils/validation';

type RegisterContextValueType = {
  form: {
    email: string;
    password: string;
    confirmPassword: string;
    typedCertificationNumber: string;
    name: string;
    phoneNumber: string;
    birthday: number[];
    gender: GenderType;
    socialType?: SocialPlatformType;
  };
  verify: {
    certificationNumber: string | undefined;
    isCheckUserEmail: boolean;
    isCheckPhoneNumber: boolean;
  };
  step: number;
  fallbackRef: MutableRefObject<string>;
};

type RegisterContextActionType = {
  verifyEmail: () => Promise<void>;
  verifyPhoneNumber: () => Promise<void>;
  handleCurrentStep: () => void;
  // eslint-disable-next-line no-unused-vars
  change: (type: string, value: unknown) => void;
  submit: () => Promise<AuthResponses['login'] | undefined>;
};

// NOTE : Context DefaultValue 추가를 위해 임시 type assertion 사용
const RegisterValueContext = createContext<RegisterContextValueType>(
  {} as RegisterContextValueType,
);
const RegisterActionContext = createContext<RegisterContextActionType>(
  {} as RegisterContextActionType,
);

export const RegisterContextProvider = ({ children }: PropsWithChildren) => {
  const [registerFormData, setRegisterFormData] = useState<
    RegisterContextValueType['form']
  >({
    email: '',
    password: '',
    confirmPassword: '',
    typedCertificationNumber: '',
    name: '',
    phoneNumber: '',
    birthday: [0, 0, 0],
    gender: 'MALE',
  });

  const [registerVerifyData, setRegisterVerifyData] = useState<
    RegisterContextValueType['verify']
  >({
    certificationNumber: undefined,
    isCheckUserEmail: false,
    isCheckPhoneNumber: false,
  });

  const [currentRegisterStep, setCurrentRegisterStep] = useState(0);

  const fallbackRef = useRef('');
  fallbackRef.current = '';

  const {
    email,
    password,
    name,
    phoneNumber,
    birthday,
    confirmPassword,
    typedCertificationNumber,
    socialType,
  } = registerFormData;

  const { certificationNumber, isCheckPhoneNumber, isCheckUserEmail } =
    registerVerifyData;

  const contextValue: RegisterContextValueType = useMemo(
    () => ({
      form: registerFormData,
      verify: registerVerifyData,
      step: currentRegisterStep,
      fallbackRef,
    }),
    [registerFormData, registerVerifyData, currentRegisterStep, fallbackRef],
  );

  const contextAction: RegisterContextActionType = useMemo(
    () => ({
      async verifyEmail() {
        if (isCheckUserEmail) {
          fallbackRef.current = REGISTER_FALLBACK.NOT_CHECK_EMAIL;
          return;
        }
        if (!ValidationUtil.validateEmail(email)) {
          fallbackRef.current = REGISTER_FALLBACK.INVALID_EMAIL;
          return;
        }
        try {
          await AuthRepository.verifyEmailAsync(email);
          setRegisterFormData((prev) => ({ ...prev, isCheckUserEmail: true }));
        } catch (error) {
          const apiError = error as ApiErrorInstance;
          const [errorMessage] = apiError.messages;
          fallbackRef.current = errorMessage;
        }
      },
      async verifyPhoneNumber() {
        if (isCheckPhoneNumber) {
          fallbackRef.current = REGISTER_FALLBACK.ALREADY_VERIFY_SMS;
          return;
        }
        if (!ValidationUtil.validatePhoneNumber(phoneNumber)) {
          fallbackRef.current = REGISTER_FALLBACK.INVALID_PHONE_NUMBER;
          return;
        }
        try {
          const { data } = await AuthRepository.verifyPhoneNumberAsync(
            phoneNumber,
          );
          setRegisterVerifyData((prev) => ({
            ...prev,
            certificationNumber: data.certificationNumber,
            isCheckPhoneNumber: true,
          }));
        } catch (error) {
          const apiError = error as ApiErrorInstance;
          const [errorMessage] = apiError.messages;
          fallbackRef.current = errorMessage;
        }
      },
      async handleCurrentStep() {
        switch (currentRegisterStep) {
          case 0: {
            if (!isCheckUserEmail) {
              fallbackRef.current = REGISTER_FALLBACK.NOT_CHECK_EMAIL;
              return;
            }
            if (!ValidationUtil.validatePassword(password)) {
              fallbackRef.current = REGISTER_FALLBACK.INVALID_PASSWORD;
              return;
            }
            if (confirmPassword !== password) {
              fallbackRef.current = REGISTER_FALLBACK.NOT_MATCH_PASSWORDS;
              return;
            }
            setCurrentRegisterStep((prev) => prev + 1);
            break;
          }
          case 1: {
            if (!ValidationUtil.validateName(name)) {
              fallbackRef.current = REGISTER_FALLBACK.INVALID_NAME;
              return;
            }
            if (!ValidationUtil.validateBirthDay(birthday.join('-'))) {
              fallbackRef.current = REGISTER_FALLBACK.INVALID_BIRTHDAY;
              return;
            }
            fallbackRef.current = '';
            setCurrentRegisterStep((prev) => prev + 1);
            break;
          }
          case 2: {
            if (!isCheckPhoneNumber) {
              fallbackRef.current = REGISTER_FALLBACK.NOT_CHECK_SMS_VERIFY;
              return;
            }
            if (certificationNumber !== typedCertificationNumber) {
              fallbackRef.current =
                REGISTER_FALLBACK.NOT_MATCH_CERTIFICATE_NUMBER;
              return;
            }
            await contextAction.submit();
            break;
          }
          default: {
            break;
          }
        }
      },
      change(type: string, value: unknown) {
        setRegisterFormData((prev) => ({ ...prev, [type]: value }));
      },
      async submit() {
        if (!isCheckPhoneNumber) {
          fallbackRef.current = REGISTER_FALLBACK.NOT_CHECK_SMS_VERIFY;
          return undefined;
        }
        try {
          // 먼저, SMS 인증이 완료되었다는 사실을 백엔드 서버에 전송해야 한다.
          await AuthRepository.confirmPhoneNumberAsync(phoneNumber);
          // 이후 최종적으로 유저의 정보를 인계하여 회원가입 처리를 완료시킨다.
          const { data: token } = socialType
            ? await SocialRepository.registerAsync({
                ...registerFormData,
                socialType,
              })
            : await AuthRepository.registerAsync(registerFormData);
          return token;
          } catch (error) {
          const apiError = error as ApiErrorInstance;
          const [errorMessage] = apiError.messages;
          fallbackRef.current = errorMessage;
          return undefined;
        }
      },
    }),
    [registerFormData, registerVerifyData],
  );

  return (
    <RegisterValueContext.Provider value={contextValue}>
      <RegisterActionContext.Provider value={contextAction}>
        {children}
      </RegisterActionContext.Provider>
    </RegisterValueContext.Provider>
  );
};

export const useRegisterContextValue = () => {
  const value = useContext(RegisterValueContext);
  if (value === undefined)
    throw new Error(
      'useRegisterContextValue는 RegisterContextProvider와 함께 사용해야 합니다.',
    );
  return value;
};

export const useRegisterContextAction = () => {
  const actions = useContext(RegisterActionContext);
  if (actions === undefined)
    throw new Error(
      'useRegisterContextAction은 RegisterContextProvider와 함께 사용해야 합니다.',
    );
  return actions;
};
