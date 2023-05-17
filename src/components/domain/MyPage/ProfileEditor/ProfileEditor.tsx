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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileUploadDialog = () => fileInputRef.current?.click();
  const uploadProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile) return;
    if (!uploadedFile.type.includes('image')) return;

    const response = await UserRepository.updateProfileImageAsync(uploadedFile);
    console.log(response);
  };

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
