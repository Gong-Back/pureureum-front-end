import React from 'react';

import { GenderType } from '@/constants/types';

import BasicInformation from '@/components/domain/MyPage/Profile/BasicInformation';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import * as style from './MyProfileTemplate.style';

interface MyProfileTemplatesProps {
  name: string;
  email: string;
  gender: GenderType;
  birthday: string;
  phoneNumber: string;
}

const MyProfileTemplate = ({
  name,
  email,
  gender,
  birthday,
  phoneNumber = '010-7167-0851',
}: MyProfileTemplatesProps) => (
  <style.Wrapper>
    <SideNavigationBar />
    <style.Main>
      <BasicInformation
        name={name}
        email={email}
        gender={gender}
        birthday={birthday}
      />
      <style.Section>
        <style.Label>휴대폰 번호</style.Label>
        <style.Content>{phoneNumber}</style.Content>
        <style.ChangeButton>번호 변경</style.ChangeButton>
      </style.Section>
      <style.Section>
        <style.Label>비밀번호</style.Label>
        <style.ChangeButton width={140}>비밀번호 변경</style.ChangeButton>
      </style.Section>
      <style.ConfirmButton isConfirm>저장하기</style.ConfirmButton>
    </style.Main>
  </style.Wrapper>
);

export default MyProfileTemplate;
