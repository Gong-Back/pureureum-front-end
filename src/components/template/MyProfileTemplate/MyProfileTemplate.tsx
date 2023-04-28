import React from 'react';

import { GenderType } from '@/constants/types';

import PersonalInformation from '@/components/domain/MyPage/Profile/PersonalInformation';
import ProfileEditor from '@/components/domain/MyPage/Profile/ProfileEditor/ProfileEditor';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
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
            <Text
              className="info-label"
              color={COLORS.grayscale.gray700}
              fontStyleName="body2B"
            >
              휴대폰 번호
            </Text>
            <Text
              className="info-content"
              color={COLORS.grayscale.gray700}
              fontStyleName="body2R"
            >
              {maskedPhoneNumber}
            </Text>
            <Button onClick={handleChangePhoneNumber} isRound sizeType="small">
              번호 변경
            </Button>
          </style.Section>
          <style.Section>
            <Text
              className="info-label"
              color={COLORS.grayscale.gray700}
              fontStyleName="body2B"
            >
              비밀번호
            </Text>
            <Button
              onClick={handleChangePassword}
              isRound
              sizeType="small"
              themeColor={COLORS.grayscale.white}
            >
              비밀번호 변경
            </Button>
          </style.Section>
        </style.PersonalSection>
        <Button sizeType="large" onClick={handleSaveChange} isFilled>
          저장하기
        </Button>
      </style.Main>
    </style.Wrapper>
  );
};

export default MyProfileTemplate;
