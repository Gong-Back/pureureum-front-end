import { useState } from 'react';

import MyProfileTemplate from '@/components/template/MyProfileTemplate';

import { PersonalInfoType } from '@/constants/types';

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    name: '백광인',
    email: 'gwangin1999@naver.com',
    phoneNumber: '010-7167-0851',
    nickname: 'naver_gwangin1999',
    gender: 'MALE',
    birthday: '1999-01-26',
    profileUrl: '',
  });

  const handleProfileImg = ()

  return (
    <MyProfileTemplate
      name={personalInfo.name}
      email={personalInfo.email}
      phoneNumber={personalInfo.phoneNumber}
      nickname={personalInfo.nickname}
      gender={personalInfo.gender}
      birthday={personalInfo.birthday}
      profileUrl={personalInfo.profileUrl}
      setPersonalInfo={setPersonalInfo}
    />
  );
};
export default Profile;
