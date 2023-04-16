import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as styles from './TextInput.style';

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  placeholder: string;
  sizeType?: 'small' | 'medium' | 'large';
  width?: number;
  isFilled?: boolean;
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
    sizeType={sizeType}
    isFilled={isFilled}
    isRound={isRound}
    placeholder={placeholder}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...inputprops}
  />
);

export default TextInput;
