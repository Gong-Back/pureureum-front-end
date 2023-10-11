import React from 'react';

import { Control, Controller } from 'react-hook-form';

import FormLabel from '@/components/common/FormLabel';
import Text from '@/components/common/Text';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import { COLORS } from '@/constants/styles';
import { PaymentType, ProjectFormType } from '@/constants/types';

import * as style from './ProjectInfoForm.style';

interface ThirdStepFormProps {
  scrollRef: (node: HTMLDivElement) => void;
  paymentType: PaymentType;
  control: Control<ProjectFormType, any>;
}

const PAYMENT_TYPE = [
  { label: '참가비 없음', option: 'NONE' },
  { label: '보증금', option: 'DEPOSIT' },
  { label: '참가비', option: 'ENTRY_FEE' },
];

export const ThirdStepForm = ({
  scrollRef,
  paymentType,
  control,
}: ThirdStepFormProps) => (
  <style.Wrapper ref={scrollRef}>
    <style.Section>
      <FormLabel text="프로젝트 참가비 유형" isEssential />
      <style.PaymentTypeContainer>
        <Controller
          control={control}
          name="paymentType"
          render={({ field: { onChange, value: selectedOption } }) => (
            <>
              {PAYMENT_TYPE.map(({ label, option }: any) => (
                <style.CheckboxWrap>
                  <style.Checkbox
                    type="radio"
                    name="paymentType"
                    checked={option === selectedOption}
                    onClick={() => onChange(option)}
                  />
                  {label}
                </style.CheckboxWrap>
              ))}
            </>
          )}
        />
      </style.PaymentTypeContainer>
    </style.Section>
    <style.Section>
      <FormLabel text="참가비(보증금) 금액" />
      <style.HorizonalWrap>
        <NewTextInput
          type="number"
          name="amount"
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
      <Controller
        control={control}
        name="refundInstruction"
        render={({ field: { onChange, value } }) => (
          <style.TextArea
            placeholder="보증금 혹은 참가비 환불 관련 안내 사항을 자세히 기재해주세요."
            value={value}
            onChange={onChange}
          />
        )}
      />
    </style.Section>
    <style.Section>
      <FormLabel text="입금 계좌 정보" />
      <div>입금 계좌 정보</div>
      {/* <div className="deposition-info">{depositionInformation}</div> */}
    </style.Section>
  </style.Wrapper>
);

export default ThirdStepForm;
