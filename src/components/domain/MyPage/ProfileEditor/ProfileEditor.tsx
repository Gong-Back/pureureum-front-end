import Image from 'next/image';
import React, { useState } from 'react';

import { UserRepository } from '@/apis/user';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import useApiMutation from '@/hooks/useApiMutation';
import useUploadFile from '@/hooks/useUploadFile';
import { useQueryClient } from '@tanstack/react-query';

import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileUrl: string;
  nickname: string;
}

const ProfileEditor = ({ profileUrl, nickname }: ProfileEditorProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync: profileMutate } = useApiMutation<void, File | undefined>(
    {
      mutationFn: (uploadedFile) =>
        UserRepository.updateProfileImageAsync(uploadedFile),
      mutationKey: QUERY_KEY.USER.base,
      options: {
        onSuccess: () => {
          queryClient.invalidateQueries(QUERY_KEY.USER.base);
        },
      },
    },
  );

  const { mutateAsync: nicknameMutate } = useApiMutation<void, string>({
    mutationFn: (changedNickname) =>
      UserRepository.updateUserInfoAsync({
        type: 'nickname',
        updatedValue: changedNickname,
      }),
    mutationKey: QUERY_KEY.USER.base,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.USER.base);
      },
    },
  });

  const [isNicknameInputVisible, setIsNicknameInputVisible] = useState(false);
  const [changedNickname, setChangedNickname] = useState('');

  const { fileInputRef, handleUploadFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onSubmit: (uploadedFile) => profileMutate(uploadedFile),
  });

  const openFileUploadDialog = () => fileInputRef.current?.click();

  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChangedNickname(value);
  };

  const handleChangeNicknameButton = () => {
    if (!isNicknameInputVisible) return setIsNicknameInputVisible(true);
    return changedNickname.length
      ? nicknameMutate(changedNickname)
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
