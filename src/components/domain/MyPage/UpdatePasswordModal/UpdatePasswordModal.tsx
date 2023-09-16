/* eslint-disable react/jsx-props-no-spreading */
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import { UserRepository } from '@/apis/user';
import Button from '@/components/common/Button';
import ModalTemplate from '@/components/common/ModalTemplate';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import { COLORS } from '@/constants/styles';
import { type UserFormType } from '@/constants/types';
import useModal from '@/hooks/useModal';

import * as style from './UpdatePasswordModal.style';

const UpdatePasswordModal = () => {
  const { closeModal } = useModal();
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

    if (changedPassword !== currentPassword) {
      setError('root', {
        message: '변경하려는 비밀번호가 현재 비밀번호와 같습니다.',
      });
      return;
    }

    await UserRepository.updateUserInfoAsync({
      type: 'password',
      updatedValue: changedPassword,
    });
    closeModal();
  };

  const isPossibleToConfirm = [
    currentPassword,
    changedPassword,
    confirmedPassword,
    currentPassword === changedPassword,
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
            type="password"
          />
          <NewTextInput
            placeholder="변경할 비밀번호"
            name="changedPassword"
            isRound
            sizeType="medium"
            type="password"
          />
          <NewTextInput
            placeholder="변경할 비밀번호 확인"
            name="confirmedPassword"
            isRound
            sizeType="medium"
            type="password"
          />
          <Button
            isFilled
            themeColor={
              isPossibleToConfirm
                ? COLORS.primary.default
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
