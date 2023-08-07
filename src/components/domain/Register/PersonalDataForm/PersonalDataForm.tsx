import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { type AuthFormType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import TextInput from '@/components/common/TextInput';
import Text from '@/components/common/Text';

import * as style from './PersonalDataForm.style';

const PersonalDataForm = () => {
  const formMethods = useFormContext<AuthFormType['register']>();
  const {
    getValues,
    setValue,
    formState: { errors },
  } = formMethods;

  const [name, gender] = getValues(['name', 'gender']);

  const [birthDate, setBirthDate] = useState([0, 0, 0]);
  const [year, month, day] = birthDate;

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    switch (inputName) {
      case 'name': {
        setValue(inputName, value);
        break;
      }
      case 'year':
      case 'month':
      case 'day': {
        const [isYear, isMonth, isDay] = [
          inputName === 'year',
          inputName === 'month',
          inputName === 'day',
        ];
        const valueToNumber = Number(value);
        if (Number.isNaN(valueToNumber)) return;

        const changedValue = [
          isYear ? valueToNumber : year,
          isMonth && valueToNumber >= 0 && valueToNumber <= 12
            ? valueToNumber
            : month,
          isDay && valueToNumber >= 0 && valueToNumber <= 31
            ? valueToNumber
            : day,
        ];
        setBirthDate(changedValue);
        change('birthday', changedValue);
        break;
      }
      default:
        break;
    }
  };

  return (
    <style.Wrapper>
      <style.Section>
        <TextInput
          fieldId="name"
          fieldOption={{ required: true, minLength: 2 }}
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
          isRound
          className="input year"
        />
        <TextInput
          placeholder="월"
          name="month"
          value={String(month).padStart(2, '0')}
          isRound
          className="input"
        />
        <TextInput
          placeholder="일"
          name="day"
          value={String(day).padStart(2, '0')}
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
          onClick={() => setValue('gender', 'FEMALE')}
          isSelected={gender === 'FEMALE'}
        >
          여자
        </style.ToggleButton>
        <style.ToggleButton
          name="MALE"
          onClick={() => setValue('gender', 'MALE')}
          isSelected={gender === 'MALE'}
        >
          남자
        </style.ToggleButton>
      </style.Section>
    </style.Wrapper>
  );
};

export default PersonalDataForm;
