import { type Control, useFormContext, useWatch } from 'react-hook-form';

import REGISTER_FALLBACK from '@/constants/fallback/register';
import { GenderType, type AuthFormType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import TextInput from '@/components/common/TextInput';
import Text from '@/components/common/Text';

import * as style from './PersonalDataForm.style';

interface PersonalDataFormProps {
  control: Control<AuthFormType['register']>;
}

const PersonalDataForm = ({ control }: PersonalDataFormProps) => {
  const { watch, setValue } = useFormContext<AuthFormType['register']>();
  const gender = useWatch({ control, name: ['gender'] });

  const selectGenderType = (selected: GenderType) => () =>
    setValue('gender', selected);

  const isSelectedGender = (selected: GenderType) =>
    watch('gender') === selected;

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          fieldId="name"
          fieldOption={{
            required: true,
            minLength: 2,
            maxLength: 6,
            pattern: /^(?:[가-힣]{2,})|(?:[a-zA-Z]{2,}\s[a-zA-Z]{2,})$/,
          }}
          placeholder="이름"
          isRound
        />
      </style.Section>
      <style.Section>
        <Text
          fontStyleName="body1B"
          color={COLORS.grayscale.gray500}
          className="title"
        >
          생년월일
        </Text>
        <TextInput
          placeholder="년"
          fieldId="birthday.0"
          fieldOption={{
            required: true,
            maxLength: 4,
            pattern: {
              value: /^(19[0-9][0-9]|20\d{2})$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          isRound
          className="input"
        />
        <TextInput
          placeholder="월"
          fieldId="birthday.1"
          fieldOption={{
            required: true,
            maxLength: 2,
            pattern: {
              value: /^(0[0-9]|1[0-2])$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          isRound
          className="input"
        />
        <TextInput
          placeholder="일"
          fieldId="birthday.2"
          fieldOption={{
            required: true,
            maxLength: 2,
            pattern: {
              value: /^(0[1-9]|[1-2][0-9]|3[0-1])$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          isRound
          className="input"
        />
      </style.Section>
      <style.Section>
        <Text
          fontStyleName="body1B"
          color={COLORS.grayscale.gray500}
          className="title"
        >
          성별
        </Text>
        <style.ToggleButton
          name="FEMALE"
          onClick={selectGenderType('FEMALE')}
          isSelected={isSelectedGender('FEMALE')}
        >
          여자
        </style.ToggleButton>
        <style.ToggleButton
          name="MALE"
          onClick={selectGenderType('MALE')}
          isSelected={isSelectedGender('MALE')}
        >
          남자
        </style.ToggleButton>
      </style.Section>
    </style.Wrapper>
  );
};

export default PersonalDataForm;
