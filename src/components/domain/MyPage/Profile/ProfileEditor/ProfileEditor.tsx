import Image from 'next/image';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
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
      <styles.Section>
        <Text
          fontStyleName="subtitle1"
          color={COLORS.grayscale.gray700}
          className="userId"
        >
          {userId || 'test_userId'}
        </Text>
        <styles.ButtonBox>
          <Button
            onClick={handleChangeProfile}
            isFilled
            isRound
            themeColor={COLORS.grayscale.white}
            sizeType="small"
          >
            닉네임 변경
          </Button>
          <Button
            onClick={handleChangeNickname}
            isFilled
            isRound
            themeColor={COLORS.grayscale.white}
            sizeType="small"
          >
            프로필 이미지 변경
          </Button>
        </styles.ButtonBox>
      </styles.Section>
    </styles.Wrapper>
  );
};

export default ProfileEditor;
