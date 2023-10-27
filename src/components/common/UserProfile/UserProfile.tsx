import Image from 'next/image';

import DefaultProfilePng from '@/assets/images/defaultProfile.png';
import Text from '@/components/common/Text';
import { COLORS, FONT_STYLE_NAME } from '@/constants/styles';

import * as style from './UserProfile.style';

interface UserProfileProps {
  /** 사용자의 프로필 사진 url */
  imageSrc?: string;
  /** 사용자의 닉네임 */
  nickname: string;
}

const UserProfile = ({ imageSrc, nickname }: UserProfileProps) => (
  <style.Wrapper>
    <style.ImageWrapper>
      <Image
        src={imageSrc || DefaultProfilePng}
        layout="fill"
        // placeholder="blur"
        className="profileImage"
        alt="profileImage"
      />
    </style.ImageWrapper>

    <Text
      fontStyleName={FONT_STYLE_NAME.body2B}
      color={COLORS.grayscale.gray700}
      className="nickname"
    >
      {nickname || '사용자'}
    </Text>
  </style.Wrapper>
);

export default UserProfile;
