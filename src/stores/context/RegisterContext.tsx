import {
  createContext,
  useMemo,
  useState,
  type PropsWithChildren,
  useContext,
} from 'react';

import { type ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import {
  AuthReqParams,
  AuthResponses,
  GenderType,
  RegisterFormInput,
  SocialPlatformType,
} from '@/constants/types';
import ValidationUtil from '@/utils/validation';

type RegisterContextValueType = {
  form: {
    email: string;
    password: string;
    confirmPassword: string;
    typedCertificationNumber: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: GenderType;
    socialType?: SocialPlatformType;
  },
  verify: {
    certificationNumber: string | undefined;
    isCheckUserEmail: boolean;
    isCheckPhoneNumber: boolean;
  }
};

type RegisterContextActionType = {
  verifyEmail: () => Promise<void>;
  verifyPhoneNumber: () => Promise<void>;
  handleCurrentStep: () => void;
    // eslint-disable-next-line no-unused-vars
  change: (type: string, value: string) => void;
  submit: () => Promise<AuthResponses['login']>;
};

// NOTE : Context DefaultValue 추가를 위해 임시 type assertion 사용
const RegisterValueContext = createContext<RegisterContextValueType>(
  {} as RegisterContextValueType,
);
const RegisterActionContext = createContext<RegisterContextActionType>(
  {} as RegisterContextActionType,
);

export const RegisterContextProvider = ({ children }: PropsWithChildren) => {
  const [registerFormData, setRegisterFormData] =
    useState<RegisterContextValueType['form']>({
      email: '',
      password: '',
      confirmPassword: '',
      typedCertificationNumber: '',
      name: '',
      phoneNumber: '',
      birthday: '',
      gender: 'MALE',
    });

  const [registerVerifyData, setRegisterVerifyData] =
    useState<RegisterContextValueType['verify']>({
      certificationNumber: undefined,
      isCheckUserEmail: false,
      isCheckPhoneNumber: false,
    });

  const {
    email,
    password,
    name,
    phoneNumber,
    birthday,
    gender,
    confirmPassword,
    typedCertificationNumber,
  } = registerFormData;

  const {
    certificationNumber,
    isCheckPhoneNumber,
    isCheckUserEmail,
  } = registerVerifyData;

  const action: RegisterContextActionType = useMemo(
    () => ({
      async verifyEmail() {
        if (isCheckUserEmail) return;
        if (!ValidationUtil.validateEmail(email)) return;

        try {
          await AuthRepository.verifyEmailAsync(email);
          setRegisterFormData((prev) => ({ ...prev, isCheckUserEmail: true }));
        } catch (error) {
          const apiError = error as ApiErrorInstance;
          const [errorMessage] = apiError.messages;
        } 
      },
      async verifyPhoneNumber() {
        if (isCheckPhoneNumber) return;
        if (!ValidationUtil.validatePhoneNumber(phoneNumber)) return;

        try {
          const { data } = await AuthRepository.verifyPhoneNumberAsync(phoneNumber);
          setRegisterVerifyData((prev) => ({
            ...prev,
            certificationNumber: data.certificationNumber,
            isCheckPhoneNumber: true,
          }));
        } catch (error) {
          const apiError = error as ApiErrorInstance;
          const [errorMessage] = apiError.messages;
        }
      },
      handleCurrentStep() {
      },
      change(type: string, value: string) {
        setRegisterFormData((prev) => ({ ...prev, [type]: value }));
      },
      async submit() {
        await AuthRepository.registerAsync(registerFormData);
      },
    }),
    [userInformation],
  );

  return (
    <RegisterValueContext.Provider value={loginInput}>
      <RegisterActionContext.Provider value={action}>
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
