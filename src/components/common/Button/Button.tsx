import React from 'react';
import * as styles from './Button.style';

export interface ButtonProps {
  sizeType?: 'small' | 'medium' | 'large';
  width?: number;
  textColor?: string;
  borderColor?: string;
  backgroundColor?: string;
  isRound?: boolean;
  className?: string;
  children: React.ReactNode;
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
