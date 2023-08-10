/* eslint-disable react/jsx-props-no-spreading */
import React, { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import {
  useController,
  type UseControllerProps,
  type FieldValues,
  type FieldPath,
} from 'react-hook-form';
import * as styles from './TextInput.style';

export type NewTextInputProps<
  T extends FieldValues = FieldValues,
  U extends FieldPath<T> = FieldPath<T>,
> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
  UseControllerProps<T, U> & {
    /** Input placeholder */
    placeholder: string;
    /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 45/50/60px, default:) */
    sizeType?: 'small' | 'medium' | 'large';
    /** 배경색 채울지에 대한 여부 (default : false) */
    isFilled?: boolean;
    /** Input 테두리 둥글게 할지 여부 (default : false)  */
    isRound?: boolean;
    /** 입력받은 값을 포맷팅하는 함수 formatValue */
    // eslint-disable-next-line no-unused-vars
    formatValue?: (value: string) => any;
    className?: string;
  };

/**
 * 텍스트를 입력받을 수 있는 Input 컴포넌트
 */
const NewTextInput = ({
  placeholder,
  isFilled,
  isRound,
  sizeType = 'medium',
  className,
  name,
  rules,
  control,
  formatValue,
  ...inputProps
}: NewTextInputProps) => {
  const {
    field: { onChange, value, ...fieldProps },
  } = useController({ name, control, rules });

  return (
    <styles.Input
      sizeType={sizeType}
      isFilled={isFilled}
      isRound={isRound}
      placeholder={placeholder}
      className={className}
      {...fieldProps}
      {...inputProps}
      onChange={(event) =>
        formatValue
          ? onChange(formatValue(event.target.value))
          : onChange(event.target.value)
      }
      value={value}
    />
  );
};

export default NewTextInput;
