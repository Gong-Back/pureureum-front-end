import React, { useState } from 'react';

import { GenderType } from '@/constants/types';

import TextInput from '@/components/common/TextInput';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import {
  useRegisterContextAction,
  useRegisterContextValue,
} from '@/stores/context/RegisterContext';

import * as style from './PersonalDataForm.style';

const PersonalDataForm = () => {
  const {
    form: { name, gender },
  } = useRegisterContextValue();
  const { change } = useRegisterContextAction();

  const [birthDate, setBirthDate] = useState([0, 0, 0]);
  const [year, month, day] = birthDate;

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    switch (inputName) {
      case "name": {
        change(inputName, value);
        break;
      }
      case "year":
      case "month":
      case "day": {
        const [isYear, isMonth, isDay] = [
          inputName === 'year',
          inputName === 'month',
          inputName === 'day',
        ];
        if (isYear || isMonth || isDay) {
          if (Number.isNaN(Number(value))) {
            return;
          }
          const changedValue = [
            isYear ? Number(value) : year,
            isMonth ? Number(value) : month,
            isDay ? Number(value) : day,
          ]
          setBirthDate(changedValue);
          change('inputName', changedValue);
        }
        break;
      }
      default:
        break;
    }
  };

  const handleSelectGender = (selectedGender: GenderType) => {
    change('gender', selectedGender);
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
          value={String(year).padStart(4, '0')}
          onChange={handleUserInput}
          isRound
          className="input year"
        />
        <TextInput
          placeholder="월"
          name="month"
          value={String(month).padStart(2, '0')}
          onChange={handleUserInput}
          isRound
          className="input"
        />
        <TextInput
          placeholder="일"
          name="day"
          value={String(day).padStart(2, '0')}
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
