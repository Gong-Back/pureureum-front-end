import { useFormContext, useWatch, Controller } from 'react-hook-form';

import REGISTER_FALLBACK from '@/constants/fallback/register';
import { type AuthFormType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import NewTextInput from '@/components/common/TextInput/NewTextInput';
import Text from '@/components/common/Text';

import * as style from './PersonalDataForm.style';

const PersonalDataForm = () => {
  const { control } = useFormContext<AuthFormType['register']>();
  const [year, month, day] = useWatch({ control, name: 'birthday' });

  return (
    <style.Wrapper>
      <style.Section>
        <NewTextInput
          name="name"
          rules={{
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
        <NewTextInput
          placeholder="년"
          name="birthday.0"
          rules={{
            required: true,
            maxLength: 4,
            pattern: {
              value: /^(19[0-9][0-9]|20\d{2})$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          formatValue={(changedYear) => {
            const convertedYear = Number(changedYear);
            const currentYear = new Date().getFullYear();
            return Number.isNaN(convertedYear) || convertedYear > currentYear
              ? year
              : convertedYear;
          }}
          isRound
          className="input"
        />
        <NewTextInput
          placeholder="월"
          name="birthday.1"
          rules={{
            required: true,
            maxLength: 2,
            pattern: {
              value: /^(0[0-9]|1[0-2])$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          formatValue={(changedMonth) => {
            const convertedMonth = Number(changedMonth);
            if (Number.isNaN(convertedMonth)) return month;
            if (Number.isNaN(convertedMonth) || convertedMonth < 1) return 1;
            if (convertedMonth > 12) return 12;
            return convertedMonth;
          }}
          isRound
          className="input"
        />
        <NewTextInput
          placeholder="일"
          name="birthday.2"
          rules={{
            required: true,
            maxLength: 2,
            pattern: {
              value: /^(0[1-9]|[1-2][0-9]|3[0-1])$/,
              message: REGISTER_FALLBACK.INVALID_BIRTHDAY,
            },
          }}
          formatValue={(changedDay) => {
            const convertedDay = Number(changedDay);
            if (Number.isNaN(convertedDay)) return day;
            if (convertedDay < 1) return 1;
            if (convertedDay > 31) return 31;
            return convertedDay;
          }}
          isRound
          className="input"
        />
      </style.Section>
      <Controller
        name="gender"
        control={control}
        defaultValue="MALE"
        render={({ field: { onChange, value: selectedGender } }) => (
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
              onClick={() => onChange('FEMALE')}
              isSelected={selectedGender === 'FEMALE'}
            >
              여자
            </style.ToggleButton>
            <style.ToggleButton
              name="MALE"
              onClick={() => onChange('MALE')}
              isSelected={selectedGender === 'MALE'}
            >
              남자
            </style.ToggleButton>
          </style.Section>
        )}
      />
    </style.Wrapper>
  );
};

export default PersonalDataForm;
