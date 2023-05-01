import React from 'react';

import { GenderType } from '@/constants/types';

import PersonalInfoList from '@/components/domain/MyPage/Profile/PersonalInfoList';
import ProfileEditor from '@/components/domain/MyPage/Profile/ProfileEditor/ProfileEditor';
import UpdatePhoneModal from '@/components/domain/MyPage/Profile/UpdatePhoneModal';
import UpdatePasswordModal from '@/components/domain/MyPage/Profile/UpdatePasswordModal';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import useModal from '@/hooks/useModal';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

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

  const { openModal } = useModal();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  console.log(currentBreakpoint);

  const openChangePhoneModal = () => openModal(<UpdatePhoneModal />);

  const openChangePasswordModal = () => openModal(<UpdatePasswordModal />);

  const handleSaveChange = () => {};

  return (
    <style.Wrapper>
      {currentBreakpoint === 'pc' && <SideNavigationBar />}
      <style.Aside>
        <ProfileEditor profileImgSrc={profileImgSrc} userId={userId} />
        <style.PersonalSection>
          <PersonalInfoList
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
            <Button onClick={openChangePhoneModal} isRound sizeType="small">
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
              onClick={openChangePasswordModal}
              isRound
              sizeType="small"
              className="profile-button"
            >
              비밀번호 변경
            </Button>
          </style.Section>
        </style.PersonalSection>
        <Button sizeType="large" onClick={handleSaveChange} isFilled>
          저장하기
        </Button>
      </style.Aside>
    </style.Wrapper>
  );
};

export default MyProfileTemplate;
