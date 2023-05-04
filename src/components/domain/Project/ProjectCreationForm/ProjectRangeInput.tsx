import React from 'react';
import * as style from './ProjectRangeInput.style';

interface ProjectPeriodInputProps {
  projectStartDate: { year: string; month: string; day: string };
  projectEndDate: { year: string; month: string; day: string };
  setProjectInformation: any;
}

export const ProjectPeriodInput = ({
  projectStartDate,
  projectEndDate,
  setProjectInformation,
}: ProjectPeriodInputProps) => {
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    type: 'projectStartDate' | 'projectEndDate',
  ) => {
    const { name: inputName, value } = e.target;
    setProjectInformation((prev: any) => ({
      ...prev,
      [type]: { ...prev[type], [inputName]: value },
    }));
  };

  return (
    <style.Wrapper>
      <style.RangeInputWrap>
        <style.RangeInput
          value={projectStartDate.year}
          placeholder="YYYY"
          maxLength={4}
          name="year"
          className="year-input"
          onChange={(e) => handleInput(e, 'projectStartDate')}
        />
        <span>.</span>
        <style.RangeInput
          value={projectStartDate.month}
          placeholder="MM"
          maxLength={2}
          name="month"
          className="month-input"
          onChange={(e) => handleInput(e, 'projectStartDate')}
        />
        <span>.</span>
        <style.RangeInput
          value={projectStartDate.day}
          placeholder="DD"
          maxLength={2}
          name="day"
          className="day-input"
          onChange={(e) => handleInput(e, 'projectStartDate')}
        />
      </style.RangeInputWrap>
      <span className="slash">-</span>
      <style.RangeInputWrap>
        <style.RangeInput
          value={projectEndDate.year}
          placeholder="YYYY"
          maxLength={4}
          name="year"
          className="year-input"
          onChange={(e) => handleInput(e, 'projectEndDate')}
        />
        <span>.</span>
        <style.RangeInput
          value={projectEndDate.month}
          placeholder="MM"
          maxLength={2}
          name="month"
          className="month-input"
          onChange={(e) => handleInput(e, 'projectEndDate')}
        />
        <span>.</span>
        <style.RangeInput
          value={projectEndDate.day}
          placeholder="DD"
          maxLength={2}
          name="day"
          className="day-input"
          onChange={(e) => handleInput(e, 'projectEndDate')}
        />
      </style.RangeInputWrap>
    </style.Wrapper>
  );
};

interface ProjectAgeInputProps {
  minAge: number;
  maxAge: number;
  handleFormInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const ProjectAgeInput = ({
  minAge,
  maxAge,
  handleFormInput,
}: ProjectAgeInputProps) => (
  <style.Wrapper>
    <style.RangeInputWrap>
      <style.RangeInput
        value={minAge === -1 ? '' : minAge}
        placeholder="00"
        maxLength={2}
        name="minAge"
        className="age-input"
        onChange={handleFormInput}
      />
      <span>세</span>
    </style.RangeInputWrap>
    <span className="slash">-</span>
    <style.RangeInputWrap>
      <style.RangeInput
        value={maxAge === -1 ? '' : maxAge}
        placeholder="00"
        maxLength={2}
        name="maxAge"
        className="age-input"
        onChange={handleFormInput}
      />
      <span>세</span>
    </style.RangeInputWrap>
  </style.Wrapper>
);
