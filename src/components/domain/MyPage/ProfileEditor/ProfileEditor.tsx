import { useState } from 'react';
import Image from 'next/image';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import useUploadFile from '@/hooks/useUploadFile';

import { COLORS } from '@/constants/styles';
import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileUrl: string;
  nickname: string;
}

const ProfileEditor = ({ profileUrl, nickname }: ProfileEditorProps) => {
  const [uploadedProfile, setUploadedProfile] = useState<File | null>(null);

  const { fileInputRef, handleUploadFile, removeUploadedFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onSubmit: (uploadedFile) => setUploadedProfile(uploadedFile),
    onRemove: () => setUploadedProfile(null),
  });

  const openFileUploadDialog = () => fileInputRef.current?.click();

  const handleChangeNickname = () => {
    console.log('test');
  };

  return (
    <styles.Wrapper>
      {profileUrl ? (
        <Image
          src={profileUrl}
          alt="profileImg"
          width={120}
          height={120}
          layout="fill"
        />
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
            onChange={handleUploadFile}
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
