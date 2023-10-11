import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { COLORS } from '@/constants/styles';

import * as styles from './Button.style';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 35/40/45px, default: medium) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 버튼 테두리 둥글게 할지 여부 (default: false) */
  isRound?: boolean;
  /** 배경색 채울지에 대한 여부 (default: false) */
  isFilled?: boolean;
  /** 버튼 색상 (default: COLORS.primary.default) */
  themeColor?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * 버튼 컴포넌트
 */
const Button = ({
  sizeType = 'medium',
  themeColor = COLORS.primary.default,
  isFilled,
  isRound,
  className,
  children,
  onClick,
}: ButtonProps) => (
  <styles.Button
    sizeType={sizeType}
    isRound={isRound}
    isFilled={isFilled}
    themeColor={themeColor}
    onClick={onClick}
    className={className}
  >
    {children}
  </styles.Button>
);

export default Button;
