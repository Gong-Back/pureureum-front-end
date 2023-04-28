import { GenderType } from '@/constants/types';

import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
import * as style from './PersonalInformation.style';

interface PersonalInformationProps {
  name: string;
  email: string;
  gender: GenderType;
  birthday: string;
}

const PersonalInformation = ({
  name = '백광인',
  email = 'gwangin1999@naver.com',
  gender = 'MALE',
  birthday = '1999.01.26',
}: PersonalInformationProps) => (
  <style.Wrapper>
    <style.Section>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2B"
        className="info-label"
      >
        이름
      </Text>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2R"
        className="info-content"
      >
        {name}
      </Text>
    </style.Section>
    <style.Section>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2B"
        className="info-label"
      >
        이메일
      </Text>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2R"
        className="info-content"
      >
        {email}
      </Text>
    </style.Section>
    <style.Section>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2B"
        className="info-label"
      >
        성별
      </Text>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2R"
        className="info-content"
      >
        {gender === 'MALE' ? '남성' : '여성'}
      </Text>
    </style.Section>
    <style.Section>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2B"
        className="info-label"
      >
        생년월일
      </Text>
      <Text
        color={COLORS.grayscale.gray700}
        fontStyleName="body2R"
        className="info-content"
      >
        {birthday}
      </Text>
    </style.Section>
  </style.Wrapper>
);

export default PersonalInformation;
