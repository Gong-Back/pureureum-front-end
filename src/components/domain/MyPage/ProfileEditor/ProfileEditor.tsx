import Image from 'next/image';
import React, { useRef } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import { UserRepository } from '@/apis/user';

import { COLORS } from '@/constants/styles';
import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileUrl: string;
  nickname: string;
}

const ProfileEditor = ({ profileUrl, nickname }: ProfileEditorProps) => {
  const { fileInputRef, handleUploadFile, removeUploadedFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onSubmit: (uploadedFile) => setValue('certificationDoc', uploadedFile),
    onRemove: () => setValue('certificationDoc', undefined),
  });

  const handleChangeNickname = () => {
    console.log('test');
  };

  return (
    <styles.Wrapper>
      {profileUrl ? (
        <Image src={profileUrl} alt="profileImg" />
      ) : (
        <styles.DefaultProfileImg />
      )}
      <styles.Section>
        <Text
          fontStyleName="subtitle1"
          color={COLORS.grayscale.gray700}
          className="nickname"
        >
          {nickname || 'test_userId'}
        </Text>
        <styles.ButtonBox>
          <Button onClick={handleChangeNickname} isRound sizeType="small">
            닉네임 변경
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={uploadProfileImage}
          />
          <Button
            onClick={openFileUploadDialog}
            isRound
            sizeType="small"
            className="profile-img"
          >
            프로필 이미지 변경
          </Button>
        </styles.ButtonBox>
      </styles.Section>
    </styles.Wrapper>
  );
};

export default ProfileEditor;
