import { useEffect, useState } from 'react';

import MenuIcon from '@/assets/icons/menuIcon.svg';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import * as style from './Header.style';

interface HeaderProps {
  isMain: boolean;
  headerInfo?: { title: string; introduction: string };
}

const Header = ({ isMain, headerInfo }: HeaderProps) => (
  // const { title, description } = headerInfo!;

  <style.Wrapper isMain={isMain}>
    <Text fontStyleName="title" color={COLORS.grayscale.white}>
      {headerInfo?.title}
    </Text>
    <Text fontStyleName="body1R" color={COLORS.grayscale.white}>
      {headerInfo?.introduction}
    </Text>
    {isMain && (
      <Button
        sizeType="small"
        themeColor={COLORS.grayscale.white}
        isRound
        onClick={() => {}}
        className="create-post-btn"
      >
        글쓰기
      </Button>
    )}
  </style.Wrapper>
);
export default Header;
