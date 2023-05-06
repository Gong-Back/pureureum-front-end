/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Step1InputType,
  Step2InputType,
  Step3InputType,
} from '@/constants/types';
import { COLORS } from '@/constants/styles';

import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import LocationBox from '@/components/common/LocationBox';
import FormLabel from '@/components/common/FormLabel';
import { ProjectAgeInput, ProjectPeriodInput } from './ProjectRangeInput';

import * as style from './ProjectCreationForm.style';

interface FormCommonProps {
  handleFormInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

interface Step1Props extends FormCommonProps, Step1InputType {}

// TODO 카테고리 태그 교체 필요해요`
export const Step1 = ({ title, guide, handleFormInput }: Step1Props) => (
  <style.Wrapper>
    <TextInput
      value={title}
      name="title"
      placeholder="제목을 입력해주세요"
      onChange={handleFormInput}
      maxLength={200}
      className="title-input"
    />
    <style.Section>
      <FormLabel text="카테고리" />
      <div>TAG</div>
    </style.Section>
    <style.Section>
      <FormLabel text="진행시설" />
      <LocationBox name="감자농장" address="서울시 영등포구 가나다라" />
    </style.Section>
    <style.Section>
      <FormLabel text="찾아오시는 길 안내" />
      <style.TextArea
        value={guide}
        name="guide"
        onChange={handleFormInput}
        placeholder="진행 장소와 관련된 안내를 기재주세요."
      />
    </style.Section>
  </style.Wrapper>
);

interface Step2Props extends FormCommonProps, Step2InputType {
  stepRef: (node: HTMLDivElement) => void;
  setProjectInformation: any;
}

export const Step2 = ({
  introduction,
  totalRecruits,
  projectStartDate,
  projectEndDate,
  minAge,
  maxAge,
  content,
  notice,
  thumnail,
  stepRef,
  handleFormInput,
  setProjectInformation,
}: Step2Props) => (
  <style.Wrapper ref={stepRef}>
    <style.Section>
      <FormLabel text="한 줄 소개" isEssential />
      <TextInput
        value={introduction}
        name="introduction"
        maxLength={200}
        onChange={handleFormInput}
        placeholder="프로젝트를 한 줄로 소개해주세요."
        isFilled
      />
    </style.Section>
    <style.HorizonalWrap className="step2-horizonal-wrap">
      <style.Section className="count-section">
        <FormLabel text="모집 인원" isEssential />
        <style.HorizonalWrap>
          <TextInput
            type="number"
            value={totalRecruits === 0 ? '' : totalRecruits}
            placeholder="모집 인원 수"
            isFilled
            className="count-input"
            name="totalRecruits"
            onChange={handleFormInput}
          />
          <style.CheckboxWrap>
            <style.Checkbox type="checkbox" name="" />
            제한 없음
          </style.CheckboxWrap>
        </style.HorizonalWrap>
      </style.Section>
      <style.Section>
        <FormLabel text="나이 제한" />
        <ProjectAgeInput
          minAge={minAge}
          maxAge={maxAge}
          handleFormInput={handleFormInput}
        />
      </style.Section>
    </style.HorizonalWrap>
    <style.Section>
      <FormLabel text="진행 기간" isEssential />
      <ProjectPeriodInput
        projectStartDate={projectStartDate}
        projectEndDate={projectEndDate}
        setProjectInformation={setProjectInformation}
      />
    </style.Section>
    <style.Section>
      <FormLabel text="프로젝트 내용" isEssential />
      <style.TextArea
        value={content}
        name="content"
        onChange={handleFormInput}
        placeholder="프로젝트 관련 소개, 스케줄, 안내 사항 등 다양한 내용을 기재해 주세요."
        className="content-input"
      />
    </style.Section>
    <style.Section>
      <FormLabel text="유의사항" isEssential />
      <style.TextArea
        value={notice}
        name="notice"
        onChange={handleFormInput}
        placeholder="프로젝트와 관련된 유의사항을 기재해 주세요."
      />
    </style.Section>
  </style.Wrapper>
);

interface Step3Props extends FormCommonProps, Step3InputType {
  stepRef: (node: HTMLDivElement) => void;
}

const PAYMENT_TYPE = [
  { text: '참가비 없음', value: 'NONE' },
  { text: '보증금', value: 'DEPOSIT' },
  { text: '참가비', value: 'ENTRY_FEE' },
];

export const Step3 = ({
  paymentType,
  refundInstruction,
  depositionInformation,
  amount,
  stepRef,
  handleFormInput,
}: Step3Props) => (
  <style.Wrapper ref={stepRef}>
    <style.Section>
      <FormLabel text="프로젝트 참가비 유형" isEssential />
      <style.PaymentTypeContainer>
        {PAYMENT_TYPE.map(({ text, value }: any) => (
          <style.CheckboxWrap>
            <style.Checkbox
              type="radio"
              name="paymentType"
              value={value}
              checked={paymentType === value}
              onChange={handleFormInput}
            />
            {text}
          </style.CheckboxWrap>
        ))}
      </style.PaymentTypeContainer>
    </style.Section>
    <style.Section>
      <FormLabel text="참가비(보증금) 금액" />
      <style.HorizonalWrap>
        <TextInput
          type="number"
          value={amount}
          name="amount"
          onChange={handleFormInput}
          placeholder="금액을 입력해주세요"
          disabled={paymentType === 'NONE'}
          isFilled
          className="count-input"
        />
        <Text color={COLORS.grayscale.gray600} fontStyleName="body1B">
          원
        </Text>
      </style.HorizonalWrap>
    </style.Section>
    <style.Section>
      <FormLabel text="환불 관련 안내 사항" />
      <style.TextArea
        value={refundInstruction}
        name="refundInstruction"
        onChange={handleFormInput}
        placeholder="보증금 혹은 참가비 환불 관련 안내 사항을 자세히 기재해주세요."
      />
    </style.Section>
    <style.Section>
      <FormLabel text="입금 계좌 정보" />
      <div>입금 계좌 정보</div>
      <div className="deposition-info">{depositionInformation}</div>
    </style.Section>
  </style.Wrapper>
);
