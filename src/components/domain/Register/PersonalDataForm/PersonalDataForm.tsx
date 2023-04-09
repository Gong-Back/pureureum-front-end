import React, { useState } from 'react';

import { GenderType, RegisterFormInput } from '@/constants/types';
import ValidationUtil from '@/utils/validation';

import * as style from './PersonalDataForm.style';

export interface PersonalDataFormProps {
  name: string;
  birthday: string;
  gender: GenderType;
  feedbackRef: React.MutableRefObject<HTMLParagraphElement>;
  setUserInformation: React.Dispatch<React.SetStateAction<RegisterFormInput>>;
}

const PersonalDataForm = ({
  name,
  birthday,
  gender,
  feedbackRef,
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
    if (inputName === 'year' || inputName === 'month' || inputName === 'day') {
      if (Number.isNaN(value)) {
        return;
      }
      const formattedValue = `${Number(value)}`.padStart(
        inputName === 'year' ? 4 : 2,
        '0',
      );
      setBirthDate((prev) => ({
        ...prev,
        [inputName]: formattedValue,
      }));
      // TODO : setState의 비동기 처리로 인해 아래와 같이 명시적으로 값으로 변경해줘야 하는데, 개선이 필요해 보임.
      setUserInformation((prev) => ({
        ...prev,
        birthday: `${inputName === 'year' ? formattedValue : year}-${
          inputName === 'month' ? formattedValue : month
        }-${inputName === 'day' ? formattedValue : day}`,
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
        <style.Input
          width={148}
          textAlign="right"
          name="year"
          placeholder="년"
          value={year.length ? year : ''}
          onChange={handleUserInput}
        />
        <style.Input
          width={110}
          textAlign="right"
          name="month"
          placeholder="월"
          value={month.length ? month : ''}
          onChange={handleUserInput}
        />
        <style.Input
          width={110}
          textAlign="right"
          name="day"
          placeholder="일"
          value={day.length ? day : ''}
          onChange={handleUserInput}
        />
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
