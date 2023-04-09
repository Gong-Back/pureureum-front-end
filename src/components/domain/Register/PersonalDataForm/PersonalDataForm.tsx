import { GenderType } from '@/constants/types';

import * as style from './PersonalDataForm.style';

export interface PersonalDataFormProps {
  name: string;
  birthday: string;
  gender: GenderType;
}

const PersonalDataForm = ({
  name,
  birthday,
  gender,
}: PersonalDataFormProps) => (
  <style.Wrapper>
    <style.Section>
      <style.Input name="name" placeholder="이름" value={name} />
    </style.Section>
    <style.Section>
      <style.Title>생년월일</style.Title>
      <style.Input width={148} name="year" placeholder="년" />
      <style.Input width={110} name="month" placeholder="월" />
      <style.Input width={110} name="day" placeholder="일" />
    </style.Section>
    <style.Section>
      <style.Title>성별</style.Title>
      <style.Button isSelected>여자</style.Button>
      <style.Button>남자</style.Button>
    </style.Section>
  </style.Wrapper>
);

export default PersonalDataForm;
