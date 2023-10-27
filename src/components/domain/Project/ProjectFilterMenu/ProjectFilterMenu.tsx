import React, { useState } from 'react';

import FilterIcon from '@/assets/icons/filterIcon.svg';
import Text from '@/components/common/Text';
import ProjectFilterModal from '@/components/domain/Project/ProjectFilterModal';
import { COLORS } from '@/constants/styles';
import useModal from '@/hooks/useModal';

import * as style from './ProjectFilterMenu.style';

const ProjectFilterMenu = () => {
  const { openModal } = useModal();

  return (
    <style.Wrapper onClick={() => openModal(<ProjectFilterModal />)}>
      <style.MenuWrap>
        <Text fontStyleName="body2B" color={COLORS.grayscale.gray500}>
          필터 추가
        </Text>
      </style.MenuWrap>
      <FilterIcon color={COLORS.primary.default} />
    </style.Wrapper>
  );
};

export default ProjectFilterMenu;
