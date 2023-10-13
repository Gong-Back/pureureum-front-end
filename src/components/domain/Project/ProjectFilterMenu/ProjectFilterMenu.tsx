import React, { useState } from 'react';

import FilterIcon from '@/assets/icons/filterIcon.svg';
import { COLORS } from '@/constants/styles';

import Text from '@/components/common/Text';
import * as style from './ProjectFilterMenu.style';

const ProjectFilterMenu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <style.Wrapper
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <style.MenuWrap>
        <Text fontStyleName="body2B" color={COLORS.primary.default}>
          필터 추가
        </Text>
      </style.MenuWrap>
      <FilterIcon color={COLORS.primary.default} />
    </style.Wrapper>
  );
};

export default ProjectFilterMenu;
