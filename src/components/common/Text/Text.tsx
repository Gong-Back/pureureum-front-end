import React from 'react';

import { FontStyleName } from '~/src/constants/styles';
import * as styles from './Text.style';

export interface TextProps {
  children: React.ReactNode;
  /** 텍스트 색 (default : COLORS.primary.dark) */
  color?: string;
  /** 텍스트 스타일 종류 (format : FONT_STYLE_NAME.*) */
  fontStyleName: FontStyleName;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 주어진 인자를 바탕으로 스타일을 적용한 텍스트 컴포넌트
 */
const Text = ({ children, color, fontStyleName, className }: TextProps) => (
  <styles.TextWrap
    color={color}
    fontStyleName={fontStyleName}
    className={className}
  >
    {children}
  </styles.TextWrap>
);

export default Text;
