import { useRouter } from 'next/router';

import {
  FormProvider,
  type SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { AuthRepository } from '@/apis/auth';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import PersonalDataForm from '@/components/domain/Register/PersonalDataForm';
import { COLORS } from '@/constants/styles';
import { type AuthFormType } from '@/constants/types';
import { type RegisterProps } from '@/pages/auth/register';
import ValidationUtil from '@/utils/validation';

import * as style from './RegisterTemplate.style';

const today = new Date();
const [currentYear, currentMonth, currentDay] = [
  today.getUTCFullYear(),
  today.getUTCMonth() + 1,
  today.getUTCDate(),
];

const RegisterTemplate = ({ socialType, socialEmail }: RegisterProps) => {
  const router = useRouter();
  const formMethods = useForm<AuthFormType['register']>({
    defaultValues: {
      name: '',
      birthday: [currentYear, currentMonth, currentDay],
      gender: 'MALE',
    },
  });
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const [name, birthday] = useWatch({
    control,
    name: ['name', 'birthday'],
  });

  const shouldCheckCurrentStep = !!(
    ValidationUtil.validateName(name) &&
    ValidationUtil.validateBirthDay(birthday)
  );

  const register: SubmitHandler<AuthFormType['register']> = async (
    submittedData,
  ) => {
    try {
      // 이후 최종적으로 유저의 정보를 인계하여 회원가입 처리를 완료시킨다.
      await AuthRepository.registerAsync({
        ...submittedData,
        email: socialEmail,
        socialType,
      });
      router.replace('/auth/login');
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
        setError('root', { message: errorMessage });
      } else {
        throw error;
      }
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <style.Wrapper>
        <style.Header>
          <Text color={COLORS.grayscale.dark} fontStyleName="subtitle1">
            환영해요 👋
          </Text>
          <Text color={COLORS.grayscale.gray500} fontStyleName="body1R">
            당신의 몇 가지 정보가 궁금해요!
          </Text>
        </style.Header>
        <style.VisibleSection>
          <style.Section>
            <PersonalDataForm />
          </style.Section>
        </style.VisibleSection>
        <style.Footer>
          {errors.root ? (
            <style.Feedback>{errors.root.message}</style.Feedback>
          ) : null}
          <Button
            themeColor={
              shouldCheckCurrentStep
                ? COLORS.primary.default
                : COLORS.grayscale.gray400
            }
            isFilled
            onClick={handleSubmit(register)}
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
