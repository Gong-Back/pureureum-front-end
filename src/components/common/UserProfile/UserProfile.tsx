import Image from 'next/image';
import DefaultProfilePng from '@/assets/images/defaultProfile.png';
import Text from '@/components/common/Text';

import { COLORS, FONT_STYLE_NAME } from '~/src/constants/styles';
import * as style from './UserProfile.style';

interface UserProfileProps {
  /** 사용자의 프로필 사진 url */
  imageSrc?: string;
  /** 사용자의 닉네임 */
  nickname: string;
}

const UserProfile = ({ imageSrc, nickname }: UserProfileProps) => (
  <style.Wrapper>
    <Image
      width={32}
      height={32}
      src={imageSrc || DefaultProfilePng}
      alt="profileImage"
      placeholder="blur"
    />
    <Text
      fontStyleName={FONT_STYLE_NAME.body2B}
      color={COLORS.grayscale.gray700}
    >
      {nickname || '사용자'}
    </Text>
  </style.Wrapper>
);

export default UserProfile;
