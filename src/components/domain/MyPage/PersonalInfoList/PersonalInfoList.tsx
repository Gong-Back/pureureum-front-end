import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { GenderType } from '@/constants/types';

import * as style from './PersonalInfoList.style';

const PersonalInfoName = new Map([
  ['name', '이름'],
  ['email', '이메일'],
  ['gender', '성별'],
  ['birthday', '생년월일'],
]);

interface PersonalInfoListProps {
  name: string;
  email: string;
  gender: GenderType;
  birthday: string;
}

const PersonalInfoList = ({
  name = '백광인',
  email = 'gwangin1999@naver.com',
  gender = 'MALE',
  birthday = '1999.01.26',
}: PersonalInfoListProps) => {
  const PersonalInfoMap = new Map([
    ['name', name],
    ['email', email],
    ['gender', gender === 'MALE' ? '남성' : '여성'],
    ['birthday', birthday],
  ]);

  return (
    <style.Wrapper>
      {Array.from(PersonalInfoMap.entries()).map(([type, value]) => (
        <style.Section key={type}>
          <Text
            color={COLORS.grayscale.gray700}
            fontStyleName="body2B"
            className="info-label"
          >
            {PersonalInfoName.get(type)}
          </Text>
          <Text
            color={COLORS.grayscale.gray700}
            fontStyleName="body2R"
            className="info-content"
          >
            {value}
          </Text>
        </style.Section>
      ))}
    </style.Wrapper>
  );
};

export default PersonalInfoList;
