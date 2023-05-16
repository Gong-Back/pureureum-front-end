import React, { useState } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { AuthRepository } from '@/apis/auth';
import { UserRepository } from '@/apis/user';
import useModal from '@/hooks/useModal';
import ValidationUtil from '@/utils/validation';

import { COLORS } from '@/constants/styles';
import * as style from './UpdatePhoneModal.style';

const UpdatePhoneModal = () => {
  const { closeModal } = useModal();
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [changedPhoneNumInfo, setchangedPhoneNumInfo] = useState({
    changedPhoneNumber: '',
    confirmedNumber: '',
    certificationNumber: '',
    isSendingVerifyNum: false,
  });

  const {
    changedPhoneNumber,
    certificationNumber,
    confirmedNumber,
    isSendingVerifyNum,
  } = changedPhoneNumInfo;

  const isPossibleToConfirm = [
    changedPhoneNumber,
    isSendingVerifyNum,
    confirmedNumber.length === 6,
    certificationNumber,
  ].every(Boolean);

  const isValidPhoneNumber =
    ValidationUtil.validatePhoneNumber(changedPhoneNumber);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    const isPhoneNumber = inputName === 'changedPhoneNumber';

    // 전화번호의 경우, 숫자만을 입력 받게 하며 자동으로 하이픈 (-) 을 추가시킴.
    if (isPhoneNumber) {
      let formattedValue = value
        .replace(/[^0-9]/g, '')
        .slice(0, changedPhoneNumber ? 11 : 6);
      formattedValue = formattedValue.replace(
        /^(\d{2,3})(\d{3,4})(\d{4})$/,
        `$1-$2-$3`,
      );
      setchangedPhoneNumInfo((prev) => ({
        ...prev,
        [inputName]: formattedValue,
      }));
      return;
    }

    setchangedPhoneNumInfo((prev) => ({ ...prev, [inputName]: value }));
  };

  const sendSmsCertificationNumber = async () => {
    if (!isValidPhoneNumber) return;

    const response = await AuthRepository.verifyPhoneNumberAsync(
      changedPhoneNumber,
    );

    if (!response.isSuccess) return;

    const { certificationNumber: newCertificatedNumber } = response.result.data;
    setchangedPhoneNumInfo((prev) => ({
      ...prev,
      certificationNumber: newCertificatedNumber,
      isSendingVerifyNum: true,
    }));
  };

  const confirmUpdatePhoneNumber = async () => {
    if (!isSendingVerifyNum) return;
    if (certificationNumber !== confirmedNumber) return;

    const response = await UserRepository.updateUserInfoAsync(
      'phoneNumber',
      changedPhoneNumber,
    );

    if (!response.isSuccess) return;
    closeModal();
  };

  return (
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
          value={changedPhoneNumber}
          isRound
          sizeType="medium"
          className="phone-input"
          onChange={handleFormInput}
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
          value={confirmedNumber}
          isRound
          sizeType="medium"
          className="verify-input"
          disabled={!isSendingVerifyNum}
          onChange={handleFormInput}
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
          onClick={confirmUpdatePhoneNumber}
        >
          변경 완료
        </Button>
      </style.Wrapper>
    </ModalTemplate>
  );
};

export default UpdatePhoneModal;
