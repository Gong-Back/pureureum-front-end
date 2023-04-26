import React, { useState } from 'react';

import { GenderType, RegisterFormInput } from '@/constants/types';

import TextInput from '@/components/common/TextInput';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import * as style from './PersonalDataForm.style';

export interface PersonalDataFormProps {
  name: string;
  gender: GenderType;
  setUserInformation: React.Dispatch<React.SetStateAction<RegisterFormInput>>;
}

const PersonalDataForm = ({
  name,
  gender,
  setUserInformation,
}: PersonalDataFormProps) => {
  const [birthDate, setBirthDate] = useState({
    year: '',
    month: '',
    day: '',
  });
  const { year, month, day } = birthDate;

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    if (inputName === 'name') {
      setUserInformation((prev) => ({ ...prev, [inputName]: value }));
      return;
    }
    const [isYear, isMonth, isDay] = [
      inputName === 'year',
      inputName === 'month',
      inputName === 'day',
    ];
    if (isYear || isMonth || isDay) {
      if (Number.isNaN(Number(value))) {
        return;
      }
      const formattedValue = `${Number(value)}`
        .padStart(isYear ? 4 : 2, '0')
        .slice(0, isYear ? 4 : 2);
      setBirthDate((prev) => ({
        ...prev,
        [inputName]: formattedValue,
      }));
      // TODO : setState의 비동기 처리로 인해 아래와 같이 명시적으로 값으로 변경해줘야 하는데, 개선이 필요해 보임.
      setUserInformation((prev) => ({
        ...prev,
        birthday: `${isYear ? formattedValue : year}-${
          isMonth ? formattedValue : month
        }-${isDay ? formattedValue : day}`,
      }));
    }
  };

  const handleSelectGender = (selectedGender: GenderType) => {
    setUserInformation((prev) => ({ ...prev, gender: selectedGender }));
  };

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          name="name"
          placeholder="이름"
          value={name}
          onChange={handleUserInput}
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
          name="year"
          value={year.length ? year : ''}
          onChange={handleUserInput}
          isRound
          className="input year"
        />
        <TextInput
          placeholder="월"
          name="month"
          value={month.length ? month : ''}
          onChange={handleUserInput}
          isRound
          className="input"
        />
        <TextInput
          placeholder="일"
          name="day"
          value={day.length ? day : ''}
          onChange={handleUserInput}
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
          onClick={() => handleSelectGender('FEMALE')}
          isSelected={gender === 'FEMALE'}
        >
          여자
        </style.ToggleButton>
        <style.ToggleButton
          name="MALE"
          onClick={() => handleSelectGender('MALE')}
          isSelected={gender === 'MALE'}
        >
          남자
        </style.ToggleButton>
      </style.Section>
    </style.Wrapper>
  );
};

export default PersonalDataForm;
