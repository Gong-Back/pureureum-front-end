import { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';
import { useFormContext, type RegisterOptions } from 'react-hook-form';
import * as styles from './TextInput.style';

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** Input 텍스트 입력 값 */
  value?: string | number;
  /** Input placeholder */
  placeholder: string;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 45/50/60px, default:) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 배경색 채울지에 대한 여부 (default : false) */
  isFilled?: boolean;
  /** Input 테두리 둥글게 할지 여부 (default : false)  */
  isRound?: boolean;
  /** react-hook-form 을 통해 등록하려는 field id */
  fieldId: string;
  /** react-hook-form register 함수에 인계할 Option */
  fieldOption?: RegisterOptions,
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
  fieldId,
  fieldOption,
  ...inputprops
}: TextInputProps) => {

  const { register } = useFormContext();

  return (
    <styles.Input
      {...register(fieldId)}
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
};

export default TextInput;
