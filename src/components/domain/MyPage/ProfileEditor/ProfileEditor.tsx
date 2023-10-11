import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';
import useUploadFile from '@/hooks/useUploadFile';
import { usePatchProfileImage, usePatchUserProfile } from '@/query-hooks/user';

import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileUrl: string;
  nickname: string;
}

const ProfileEditor = ({ profileUrl, nickname }: ProfileEditorProps) => {
  const { mutate: profileImageMutate } = usePatchProfileImage();
  const { mutate: profileInfoMutate } = usePatchUserProfile();

  const [isNicknameInputVisible, setIsNicknameInputVisible] = useState(false);
  const [changedNickname, setChangedNickname] = useState('');

  const { fileInputRef, handleUploadFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onSubmit: (uploadedFile) => profileImageMutate(uploadedFile),
  });

  const openFileUploadDialog = () => fileInputRef.current?.click();

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChangedNickname(value);
  };

  const handleChangeNicknameButton = () => {
    if (!isNicknameInputVisible) return setIsNicknameInputVisible(true);
    return changedNickname.length
      ? profileInfoMutate({ type: 'nickname', updatedValue: changedNickname })
      : setIsNicknameInputVisible(false);
  };

  return (
    <styles.Wrapper>
      <styles.DefaultProfileImg />
      <styles.Section>
        {isNicknameInputVisible ? (
          <TextInput
            isFilled
            sizeType="small"
            name="changedNickname"
            onChange={handleChangeNickname}
            max={20}
            placeholder="변경할 닉네임을 입력해주세요"
          />
        ) : (
          <Text
            fontStyleName="subtitle1"
            color={COLORS.grayscale.gray700}
            className="nickname"
          >
            {nickname || 'test_userId'}
          </Text>
        )}
        <styles.ButtonBox>
          <Button
            onClick={handleChangeNicknameButton}
            isRound
            sizeType="small"
            themeColor={COLORS.primary.default}
          >
            닉네임 변경
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleUploadFile}
          />
          {isNicknameInputVisible ? (
            <Button
              onClick={() => setIsNicknameInputVisible(false)}
              isRound
              sizeType="small"
              themeColor={COLORS.primary.default}
            >
              변경 취소
            </Button>
          ) : (
            <Button
              onClick={openFileUploadDialog}
              themeColor={COLORS.primary.default}
              isRound
              sizeType="small"
              className="profile-img"
            >
              프로필 이미지 변경
            </Button>
          )}
        </styles.ButtonBox>
      </styles.Section>
    </styles.Wrapper>
  );
};

export default ProfileEditor;
