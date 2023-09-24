import React from 'react';

import { UserRepository } from '@/apis/user';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Layout from '@/components/domain/MyPage/Layout';
import PersonalInfoList from '@/components/domain/MyPage/PersonalInfoList';
import ProfileEditor from '@/components/domain/MyPage/ProfileEditor';
import UpdatePasswordModal from '@/components/domain/MyPage/UpdatePasswordModal';
import UpdatePhoneModal from '@/components/domain/MyPage/UpdatePhoneModal';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { UserResponses } from '@/constants/types';
import useApiQuery from '@/hooks/useApiQuery';
import useModal from '@/hooks/useModal';
import FormatUtil from '@/utils/format';

import * as style from './MyProfileTemplate.style';

const MyProfileTemplate = () => {
  const { data: userProfile } = useApiQuery<UserResponses['info']>({
    queryFn: UserRepository.getUserInfoAsync,
    queryKey: QUERY_KEY.USER.base,
    options: { staleTime: 0, cacheTime: Infinity },
  });

  const { openModal } = useModal();
  const openChangePhoneModal = () => openModal(<UpdatePhoneModal />);
  const openChangePasswordModal = () => openModal(<UpdatePasswordModal />);

  const handleSaveChange = () => {};

  if (!userProfile) return null;

  return (
    <Layout>
      <ProfileEditor profileUrl={userProfile.profileUrl} nickname={userProfile.nickname} />
      <style.PersonalSection>
        <PersonalInfoList
          name={userProfile.name}
          email={userProfile.email}
          gender={userProfile.gender}
          birthday={userProfile.birthday}
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
            {FormatUtil.formatMaskPhoneNum(userProfile.phoneNumber)}
          </Text>
          <Button
            onClick={openChangePhoneModal}
            themeColor={COLORS.primary.default}
            isRound
            sizeType="small"
            className="phone-button"
          >
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
            themeColor={COLORS.primary.default}
            isRound
            sizeType="small"
            className="profile-button"
          >
            비밀번호 변경
          </Button>
        </style.Section>
      </style.PersonalSection>
      <Button
        sizeType="large"
        themeColor={COLORS.primary.default}
        onClick={handleSaveChange}
        isFilled
        className="confirm-button"
      >
        저장하기
      </Button>
    </Layout>
  );
};

export default MyProfileTemplate;
