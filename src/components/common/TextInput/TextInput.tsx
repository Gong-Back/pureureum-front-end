import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as styles from './TextInput.style';

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** Input 텍스트 입력 값 */
  value: string;
  /** Input placeholder */
  placeholder: string;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 45/50/60px, default:) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 배경색 채울지에 대한 여부 (default : false) */
  isFilled?: boolean;
  /** Input 테두리 둥글게 할지 여부 (default : false)  */
  isRound?: boolean;
  className?: string;
}

/**
 * 텍스트를 입력받을 수 있는 Input 컴포넌트
 */
const TextInput = ({
  placeholder,
  value,
  isFilled,
  isRound,
  sizeType = 'medium',
  className,
  ...inputprops
}: TextInputProps) => (
  <styles.Input
    type="text"
    value={value}
    sizeType={sizeType}
    isFilled={isFilled}
    isRound={isRound}
    placeholder={placeholder}
    className={className}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...inputprops}
  />
);

export default TextInput;
