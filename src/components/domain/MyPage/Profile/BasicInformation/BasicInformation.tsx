import { GenderType } from '@/constants/types';

import * as style from './BasicInformation.style';

interface BasicInformationProps {
  name: string;
  email: string;
  gender: GenderType;
  birthday: string;
}

const BasicInformation = ({
  name = '백광인',
  email = 'gwangin1999@naver.com',
  gender = 'MALE',
  birthday = '1999.01.26',
}: BasicInformationProps) => (
  <style.Wrapper>
    <style.Section>
      <style.Label>이름</style.Label>
      <style.Content>{name}</style.Content>
    </style.Section>
    <style.Section>
      <style.Label>이메일</style.Label>
      <style.Content>{email}</style.Content>
    </style.Section>
    <style.Section>
      <style.Label>성별</style.Label>
      <style.Content>{gender}</style.Content>
    </style.Section>
    <style.Section>
      <style.Label>생년월일</style.Label>
      <style.Content>{birthday}</style.Content>
    </style.Section>
  </style.Wrapper>
);

export default BasicInformation;
