/* eslint-disable react/jsx-props-no-spreading */
import {
  useForm,
  useWatch,
  FormProvider,
  SubmitHandler,
} from 'react-hook-form';

import Button from '@/components/common/Button';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { UserRepository } from '@/apis/user';

import { COLORS } from '@/constants/styles';
import { type UserFormType } from '@/constants/types';

import * as style from './UpdatePasswordModal.style';

const UpdatePasswordModal = () => {
  const formMethods = useForm<UserFormType['updatePassword']>({
    defaultValues: {
      currentPassword: '',
      changedPassword: '',
      confirmedPassword: '',
    },
  });
  const {
    control,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const [changedPassword, confirmedPassword, currentPassword] = useWatch({
    control,
    name: ['changedPassword', 'confirmedPassword', 'currentPassword'],
  });

  const confirmUpdatePassword: SubmitHandler<
    UserFormType['updatePassword']
  > = async () => {
    if (changedPassword !== confirmedPassword) {
      setError('root', { message: '비밀번호가 서로 일치하지 않습니다.' });
      return;
    }
    await UserRepository.updateUserInfoAsync({
      type: 'password',
      updatedValue: changedPassword,
    });
  };

  const isPossibleToConfirm = [
    currentPassword,
    changedPassword,
    confirmedPassword,
  ].every(Boolean);

  return (
    <FormProvider {...formMethods}>
      <ModalTemplate title="비밀번호 변경하기">
        <style.Wrapper>
          <NewTextInput
            placeholder="기존 비밀번호"
            name="currentPassword"
            isRound
            sizeType="medium"
          />
          <NewTextInput
            placeholder="변경할 비밀번호"
            name="changedPassword"
            isRound
            sizeType="medium"
          />
          <NewTextInput
            placeholder="변경할 비밀번호 확인"
            name="confirmedPassword"
            isRound
            sizeType="medium"
          />
          <Button
            isFilled
            themeColor={
              isPossibleToConfirm
                ? COLORS.primary.greenDefault
                : COLORS.grayscale.gray400
            }
            sizeType="small"
            className="confirm-btn"
            onClick={() => handleSubmit(confirmUpdatePassword)()}
          >
            비밀번호 변경
          </Button>
          {errors.root && <p>{errors.root.message}</p>}
        </style.Wrapper>
      </ModalTemplate>
    </FormProvider>
  );
};

export default UpdatePasswordModal;
