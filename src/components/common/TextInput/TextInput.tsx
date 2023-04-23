import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as styles from './TextInput.style';

// TODO Input 배경색 색상 변수에 등록
export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** Input value */
  value: string;
  /** Input placeholder */
  placeholder: string;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 45/50/60px) */
  sizeType?: 'small' | 'medium' | 'large';
  /** Input 컴포넌트 너비 */
  width?: number;
  /** 배경색 채울지에 대한 여부 (배경색 : #F8F8F8) */
  isFilled?: boolean;
  /** Input 테두리 둥글게 할지 여부  */
  isRound?: boolean;
  className?: string;
}

const TextInput = ({
  placeholder,
  sizeType,
  width,
  isFilled,
  isRound,
  value,
  className,
  ...inputprops
}: TextInputProps) => (
  <styles.Input
    type="text"
    value={value}
    width={width}
    sizeType={sizeType}
    isFilled={isFilled}
    isRound={isRound}
    placeholder={placeholder}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...inputprops}
  />
);

export default TextInput;
