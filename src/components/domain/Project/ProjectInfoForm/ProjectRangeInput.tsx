import React from 'react';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import * as style from './ProjectRangeInput.style';

export const ProjectPeriodInput = () => (
  <style.Wrapper>
    <style.RangeInputWrap>
      <NewTextInput
        type="number"
        name="projectStartDate.year"
        rules={{ maxLength: 4 }}
        placeholder="YYYY"
        className="input year-input"
      />
      <span>.</span>
      <NewTextInput
        type="number"
        name="projectStartDate.month"
        placeholder="MM"
        rules={{ maxLength: 2 }}
        className="input month-input"
      />
      <span>.</span>
      <NewTextInput
        type="number"
        name="projectStartDate.day"
        rules={{ maxLength: 4 }}
        placeholder="DD"
        className="input day-input"
      />
    </style.RangeInputWrap>
    <span className="slash">-</span>
    <style.RangeInputWrap>
      <NewTextInput
        type="number"
        name="projectEndDate.year"
        rules={{ maxLength: 4 }}
        placeholder="YYYY"
        maxLength={4}
        className="input year-input"
      />
      <span>.</span>
      <NewTextInput
        type="number"
        name="projectEndDate.month"
        rules={{ maxLength: 2 }}
        placeholder="MM"
        className="input month-input"
      />
      <span>.</span>
      <NewTextInput
        type="number"
        name="projectEndDate.day"
        rules={{ maxLength: 2 }}
        placeholder="DD"
        className="input day-input"
      />
    </style.RangeInputWrap>
  </style.Wrapper>
);

interface ProjectAgeInputProps {
  minAge: number;
  maxAge: number;
}

export const ProjectAgeInput = ({ minAge, maxAge }: ProjectAgeInputProps) => (
  <style.Wrapper>
    <style.RangeInputWrap>
      <NewTextInput
        type="number"
        name="minAge"
        rules={{ maxLength: 2 }}
        placeholder="00"
        displayedValue={minAge < 0 ? '' : String(minAge)}
        className="input age-input"
        isFilled
      />
      <span>세</span>
    </style.RangeInputWrap>
    <span className="slash">-</span>
    <style.RangeInputWrap>
      <NewTextInput
        type="number"
        name="maxAge"
        rules={{ maxLength: 2 }}
        placeholder="00"
        displayedValue={maxAge < 0 ? '' : String(maxAge)}
        className="input age-input"
        isFilled
      />

      <span>세</span>
    </style.RangeInputWrap>
  </style.Wrapper>
);
