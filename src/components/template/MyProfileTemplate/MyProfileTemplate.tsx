import React from 'react';

import { GenderType } from '@/constants/types';

import PersonalInformation from '@/components/domain/MyPage/Profile/PersonalInformation';
import ProfileEditor from '@/components/domain/MyPage/Profile/ProfileEditor/ProfileEditor';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import Button from '@/components/common/Button';
import { theme } from '@/constants/styles';

import * as style from './MyProfileTemplate.style';

interface MyProfileTemplatesProps {
  name: string;
  email: string;
  gender: GenderType;
  birthday: string;
  phoneNumber: string;
  profileImgSrc: string;
  userId: string;
}

const MyProfileTemplate = ({
  name,
  email,
  gender,
  birthday,
  phoneNumber = '010-7167-0851',
  profileImgSrc,
  userId,
}: MyProfileTemplatesProps) => {
  // TODO : 정규식의 경우 추후 Util 로 묶을 수 있다면 일괄적으로 수정해야 함.
  const maskedPhoneNumber = phoneNumber.replace(/-[0-9]{4}-/g, '-****-');

  const handleChangePhoneNumber = () => {};

  const handleChangePassword = () => {};

  const handleSaveChange = () => {};

  return (
    <style.Wrapper>
      <SideNavigationBar />
      <style.Main>
        <ProfileEditor profileImgSrc={profileImgSrc} userId={userId} />
        <style.PersonalSection>
          <PersonalInformation
            name={name}
            email={email}
            gender={gender}
            birthday={birthday}
          />
          <style.Section>
            <style.Label>휴대폰 번호</style.Label>
            <style.Content>{maskedPhoneNumber}</style.Content>
            <Button
              width={100}
              sizeType="small"
              textColor={theme.colors.primary.greenDefault}
              borderColor={theme.colors.primary.greenDefault}
              backgroundColor={theme.colors.grayscale.white}
              onClick={handleChangePhoneNumber}
              isRound
            >
              번호 변경
            </Button>
          </style.Section>
          <style.Section>
            <style.Label>비밀번호</style.Label>
            <Button
              width={140}
              sizeType="small"
              textColor={theme.colors.primary.greenDefault}
              borderColor={theme.colors.primary.greenDefault}
              backgroundColor={theme.colors.grayscale.white}
              onClick={handleChangePassword}
              isRound
            >
              비밀번호 변경
            </Button>
          </style.Section>
        </style.PersonalSection>
        <Button width={300} sizeType="large" onClick={handleSaveChange}>
          저장하기
        </Button>
      </style.Main>
    </style.Wrapper>
  );
};

export default MyProfileTemplate;
