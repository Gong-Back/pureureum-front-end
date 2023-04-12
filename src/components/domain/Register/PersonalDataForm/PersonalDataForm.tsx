import React, { useState } from 'react';

import { GenderType, RegisterFormInput } from '@/constants/types';

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
        <style.Input
          name="name"
          placeholder="이름"
          value={name}
          onChange={handleUserInput}
        />
      </style.Section>
      <style.Section>
        <style.Title>생년월일</style.Title>
        <style.InputWrapper>
          <style.Input
            width={148}
            textAlign="right"
            name="year"
            value={year.length ? year : ''}
            onChange={handleUserInput}
          />
          <style.InputPlaceholder>년</style.InputPlaceholder>
        </style.InputWrapper>
        <style.InputWrapper>
          <style.Input
            width={110}
            textAlign="right"
            name="month"
            value={month.length ? month : ''}
            onChange={handleUserInput}
          />
          <style.InputPlaceholder>월</style.InputPlaceholder>
        </style.InputWrapper>
        <style.InputWrapper>
          <style.Input
            width={110}
            textAlign="right"
            name="day"
            value={day.length ? day : ''}
            onChange={handleUserInput}
          />
          <style.InputPlaceholder>일</style.InputPlaceholder>
        </style.InputWrapper>
      </style.Section>
      <style.Section>
        <style.Title>성별</style.Title>
        <style.Button
          name="FEMALE"
          onClick={() => handleSelectGender('FEMALE')}
          isSelected={gender === 'FEMALE'}
        >
          여자
        </style.Button>
        <style.Button
          name="MALE"
          onClick={() => handleSelectGender('MALE')}
          isSelected={gender === 'MALE'}
        >
          남자
        </style.Button>
      </style.Section>
    </style.Wrapper>
  );
};

export default PersonalDataForm;
