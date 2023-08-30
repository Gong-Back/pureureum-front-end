import React from 'react';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import FormLabel from '@/components/common/FormLabel';
import CategoryTag from '@/components/common/CategoryTag';
import LocationBox from '@/components/common/LocationBox';

import { Control, Controller } from 'react-hook-form';
import { ProjectFormType } from '@/constants/types';
import * as style from './ProjectInfoForm.style';

interface FirstStepFormProps {
  control: Control<ProjectFormType, any>;
}

export const FirstStepForm = ({ control }: FirstStepFormProps) => (
  <style.Wrapper>
    <NewTextInput
      name="title"
      rules={{ required: '제목을 반드시 입력해주세요', minLength: 1 }}
      placeholder="제목을 입력해주세요"
      maxLength={200}
      className="title-input"
    />
    <style.Section>
      <FormLabel text="카테고리" />
      <CategoryTag sizeType="big" type="YOUTH_FARMING" />
    </style.Section>
    <style.Section>
      <FormLabel text="진행시설" />
      <LocationBox name="감자농장" address="서울시 영등포구 가나다라" />
    </style.Section>
    <style.Section>
      <FormLabel text="찾아오시는 길 안내" />
      <Controller
        control={control}
        name="guide"
        render={({ field: { onChange, value } }) => (
          <style.TextArea
            placeholder="진행 장소와 관련된 안내를 기재주세요."
            value={value}
            onChange={onChange}
          />
        )}
      />
    </style.Section>
  </style.Wrapper>
);

export default FirstStepForm;
