import Image from 'next/image';

import DefaultProfilePng from '@/assets/images/defaultProfile.png';

import * as style from './UserProfile.style';

interface UserProfileProps {
  imageSrc: string;
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
    <style.Nickname>{nickname || '사용자'}</style.Nickname>
  </style.Wrapper>
);

export default UserProfile;
