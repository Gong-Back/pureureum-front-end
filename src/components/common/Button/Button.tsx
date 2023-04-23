import React from 'react';
import * as styles from './Button.style';

export interface ButtonProps {
  children: React.ReactNode;
  /** 높이를 기준으로 분류되는 사이즈 타입 (각각 높이: 35/40/45px) */
  sizeType?: 'small' | 'medium' | 'large';
  /** 버튼 컴포넌트 너비 */
  width?: number;
  /** 버튼 텍스트 색상 (default: colors.grayscale.white) */
  textColor?: string;
  /** 버튼 테두리 색상 (default: none) */
  borderColor?: string;
  /** 버튼 배경 색상 (default: colors.primary.greendefault) */
  backgroundColor?: string;
  /** 버튼 테두리 둥글게 할지 여부 */
  isRound?: boolean;
  className?: string;
  onClick: () => void;
}

const Button = ({
  sizeType,
  width,
  textColor,
  borderColor,
  backgroundColor,
  isRound,
  className,
  children,
  onClick,
}: ButtonProps) => (
  <styles.Button
    sizeType={sizeType}
    width={width}
    isRound={isRound}
    textColor={textColor}
    borderColor={borderColor}
    backgroundColor={backgroundColor}
    onClick={onClick}
    className={className}
  >
    {children}
  </styles.Button>
);

export default Button;
