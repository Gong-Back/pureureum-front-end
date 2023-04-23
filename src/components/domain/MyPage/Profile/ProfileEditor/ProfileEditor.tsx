import Image from 'next/image';

import Button from '@/components/common/Button';
import { theme } from '@/constants/styles';

import * as styles from './ProfileEditor.style';

interface ProfileEditorProps {
  profileImgSrc: string;
  userId: string;
}

const ProfileEditor = ({ profileImgSrc, userId }: ProfileEditorProps) => {
  const handleChangeProfile = () => {
    console.log('test');
  };

  const handleChangeNickname = () => {
    console.log('test');
  };

  return (
    <styles.Wrapper>
      {profileImgSrc ? (
        <Image src={profileImgSrc} alt="profileImg" />
      ) : (
        <styles.DefaultProfileImg />
      )}
      <styles.ProfileSection>
        <styles.UserId>{userId || 'test_userId'}</styles.UserId>
        <styles.ButtonContainer>
          <Button
            width={110}
            sizeType="small"
            textColor={theme.colors.primary.greenDefault}
            borderColor={theme.colors.primary.greenDefault}
            backgroundColor={theme.colors.grayscale.white}
            onClick={handleChangeNickname}
            isRound
          >
            닉네임 변경
          </Button>
          <Button
            width={140}
            sizeType="small"
            textColor={theme.colors.primary.greenDefault}
            borderColor={theme.colors.primary.greenDefault}
            backgroundColor={theme.colors.grayscale.white}
            onClick={handleChangeProfile}
            isRound
          >
            프로필 이미지 변경
          </Button>
        </styles.ButtonContainer>
      </styles.ProfileSection>
    </styles.Wrapper>
  );
};

export default ProfileEditor;
