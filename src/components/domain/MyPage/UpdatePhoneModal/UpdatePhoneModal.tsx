import { AuthRepository } from '@/apis/auth';
import { UserRepository } from '@/apis/user';

import {
  useForm,
  FormProvider,
  useWatch,
  SubmitHandler,
} from 'react-hook-form';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { type UserFormType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import useModal from '@/hooks/useModal';
import ValidationUtil from '@/utils/validation';

import * as style from './UpdatePhoneModal.style';

const UpdatePhoneModal = () => {
  const { closeModal } = useModal();

  const formMethods = useForm<UserFormType['updatePhoneNumber']>({
    defaultValues: {
      changedPhoneNumber: '',
      confirmedNumber: '',
      certificationNumber: '',
      isSendingVerifyNum: false,
    },
  });

  const {
    control,
    handleSubmit,
    setError,
    setValue,
  } = formMethods;

  const [
    changedPhoneNumber,
    certificationNumber,
    confirmedNumber,
    isSendingVerifyNum,
  ] = useWatch({
    control,
    name: [
      'changedPhoneNumber',
      'certificationNumber',
      'confirmedNumber',
      'isSendingVerifyNum',
    ],
  });

  const isPossibleToConfirm = [
    changedPhoneNumber,
    isSendingVerifyNum,
    confirmedNumber.length === 6,
    certificationNumber,
  ].every(Boolean);

  const isValidPhoneNumber =
    ValidationUtil.validatePhoneNumber(changedPhoneNumber);

  const sendSmsCertificationNumber = async () => {
    if (!isValidPhoneNumber) return;

    try {
      const {
        data: { certificationNumber: receivedCertNumber },
      } = await AuthRepository.verifyPhoneNumberAsync(changedPhoneNumber);
      setValue('isSendingVerifyNum', true);
      setValue('certificationNumber', receivedCertNumber);
    } catch (error) {
      setError('root', {
        message: '통신 과정에서 문제가 생겼습니다. 다시 시도해주세요.',
      });
    }
  };

  const confirmUpdatePhoneNumber: SubmitHandler<
    UserFormType['updatePhoneNumber']
  > = async () => {
    if (isSendingVerifyNum) return;
    if (certificationNumber !== confirmedNumber) return;

    try {
      await UserRepository.updateUserInfoAsync({
        type: 'phoneNumber',
        updatedValue: changedPhoneNumber,
      });
      closeModal();
    } catch (error) {
      setError('root', {
        message: '통신 과정에서 문제가 생겼습니다. 다시 시도해주세요.',
      });
    }
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...formMethods}>
      <ModalTemplate title="휴대폰 번호 변경하기">
        <style.Wrapper>
          <Text
            color={COLORS.grayscale.gray500}
            fontStyleName="body3"
            className="title"
          >
            변경할 번호를 입력해주시고 SMS 인증을 진행해주세요
          </Text>
          <TextInput
            placeholder="전화번호"
            name="changedPhoneNumber"
            formatValue={(value) =>
              value
                .replace(/[^0-9]/g, '')
                .slice(0, 11)
                .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)
            }
            isRound
            sizeType="medium"
            className="phone-input"
            disabled={isSendingVerifyNum}
          />
          <Button
            isFilled
            sizeType="medium"
            className="verify-btn"
            themeColor={
              isValidPhoneNumber && !isSendingVerifyNum
                ? COLORS.primary.greenDefault
                : COLORS.grayscale.gray400
            }
            onClick={sendSmsCertificationNumber}
          >
            {!isSendingVerifyNum ? '인증번호 요청' : '요청 전송됨'}
          </Button>
          <TextInput
            placeholder="인증번호"
            name="confirmedNumber"
            isRound
            sizeType="medium"
            className="verify-input"
            disabled={!isSendingVerifyNum}
            formatValue={(value) => value.replace(/[^0-9]/g, '').slice(0, 6)}
            maxLength={6}
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
            onClick={handleSubmit(confirmUpdatePhoneNumber)}
          >
            변경 완료
          </Button>
        </style.Wrapper>
      </ModalTemplate>
    </FormProvider>
  );
};

export default UpdatePhoneModal;
