import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';

import { UserRepository } from '@/apis/user';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import useApiMutation from '@/hooks/useApiMutation';
import useUploadFile from '@/hooks/useUploadFile';

import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileUrl: string;
  nickname: string;
}

const ProfileEditor = ({ profileUrl, nickname }: ProfileEditorProps) => {

  const queryClient = useQueryClient();
  const { mutateAsync: profileMutate } = useApiMutation<void, File | undefined>({
    mutationFn: (uploadedFile) => UserRepository.updateProfileImageAsync(uploadedFile),
    mutationKey: QUERY_KEY.USER.base,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEY.USER.base);
      }
    }
  });

  const { fileInputRef, handleUploadFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onSubmit: (uploadedFile) => profileMutate(uploadedFile),
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
          <Button
            onClick={handleChangeNickname}
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
          <Button
            onClick={openFileUploadDialog}
            themeColor={COLORS.primary.default}
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
