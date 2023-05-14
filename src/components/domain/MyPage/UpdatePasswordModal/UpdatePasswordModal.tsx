import React, { useState, useRef } from 'react';

import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { UserRepository } from '@/apis/user';

import { COLORS } from '@/constants/styles';
import * as style from './UpdatePasswordModal.style';

const UpdatePasswordModal = () => {
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [changedPasswordInfo, setChangedPasswordInfo] = useState({
    currentPassword: '',
    changedPassword: '',
    confirmedPassword: '',
  });
  const { currentPassword, changedPassword, confirmedPassword } =
    changedPasswordInfo;

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setChangedPasswordInfo((prev) => ({ ...prev, [inputName]: value }));
  };

  const confirmUpdatePassword = async () => {
    if (changedPassword !== confirmedPassword) {
      setFeedbackMsg('비밀번호가 서로 일치하지 않습니다.');
      return;
    }
    const response = await UserRepository.updateUserInfoAsync(
      'password',
      changedPassword,
    );
  };

  const isPossibleToConfirm = [
    currentPassword,
    changedPassword,
    confirmedPassword,
  ].every(Boolean);

  return (
    <ModalTemplate title="비밀번호 변경하기">
      <style.Wrapper>
        <TextInput
          placeholder="기존 비밀번호"
          name="currentPassword"
          value={currentPassword}
          isRound
          sizeType="medium"
          onChange={handleFormInput}
        />
        <TextInput
          placeholder="변경할 비밀번호"
          name="changedPassword"
          value={changedPassword}
          isRound
          sizeType="medium"
          onChange={handleFormInput}
        />
        <TextInput
          placeholder="변경할 비밀번호 확인"
          name="confirmedPassword"
          value={confirmedPassword}
          isRound
          sizeType="medium"
          onChange={handleFormInput}
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
          onClick={confirmUpdatePassword}
        >
          비밀번호 변경
        </Button>
        {feedbackMsg && <p>{feedbackMsg}</p>}
      </style.Wrapper>
    </ModalTemplate>
  );
};

export default UpdatePasswordModal;
