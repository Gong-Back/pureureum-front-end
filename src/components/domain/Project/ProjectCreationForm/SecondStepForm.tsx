import React from 'react';
import FormLabel from '@/components/common/FormLabel';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';
import { ProjectFormType } from '@/constants/types';
import { ProjectAgeInput, ProjectPeriodInput } from './ProjectRangeInput';

import * as style from './ProjectInfoForm.style';

interface SecondStepFormProps {
  scrollRef: (node: HTMLDivElement) => void;
  control: Control<ProjectFormType, any>;
  setValue: UseFormSetValue<ProjectFormType>;
  totalRecruits: number;
  minAge: number;
  maxAge: number;
}

export const SecondStepForm = ({
  scrollRef,
  control,
  setValue,
  totalRecruits,
  minAge,
  maxAge,
}: SecondStepFormProps) => {
  const handleAgeLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('totalRecruits', e.target.checked ? -1 : 0);
  };

  return (
    <style.Wrapper ref={scrollRef}>
      <style.Section>
        <FormLabel text="한 줄 소개" isEssential />
        <NewTextInput
          name="introduction"
          rules={{
            required: '프로젝트 한 줄 소개를 반드시 입력해주세요',
            maxLength: 200,
          }}
          placeholder="프로젝트를 한 줄로 소개해주세요."
          isFilled
        />
      </style.Section>
      <style.HorizonalWrap className="SecondStepForm-horizonal-wrap">
        <style.Section className="count-section">
          <FormLabel text="모집 인원" isEssential />
          <style.HorizonalWrap>
            <NewTextInput
              type="number"
              name="totalRecruits"
              rules={{ required: '모집 인원을 반드시 설정해주세요' }}
              displayedValue={totalRecruits < 0 ? '' : String(totalRecruits)}
              disabled={totalRecruits < 0}
              placeholder="모집 인원 수"
              isFilled
              className="count-input"
            />
            <style.CheckboxWrap>
              <style.Checkbox
                type="checkbox"
                name="noAgelimit"
                onChange={handleAgeLimit}
              />
              제한 없음
            </style.CheckboxWrap>
          </style.HorizonalWrap>
        </style.Section>
        <style.Section>
          <FormLabel text="나이 제한" />
          <ProjectAgeInput minAge={minAge} maxAge={maxAge} />
        </style.Section>
      </style.HorizonalWrap>
      <style.Section>
        <FormLabel text="진행 기간" isEssential />
        <ProjectPeriodInput />
      </style.Section>
      <style.Section>
        <FormLabel text="프로젝트 내용" isEssential />
        <Controller
          control={control}
          name="content"
          render={({ field: { onChange, value } }) => (
            <style.TextArea
              placeholder="프로젝트 관련 소개, 스케줄, 안내 사항 등 다양한 내용을 기재해 주세요."
              value={value}
              onChange={onChange}
              className="content-input"
            />
          )}
        />
      </style.Section>
      <style.Section>
        <FormLabel text="유의사항" />
        <Controller
          control={control}
          name="notice"
          render={({ field: { onChange, value } }) => (
            <style.TextArea
              placeholder="프로젝트와 관련된 유의사항을 기재해 주세요."
              value={value}
              onChange={onChange}
            />
          )}
        />
      </style.Section>
    </style.Wrapper>
  );
};

export default SecondStepForm;
