import { useState } from 'react';
import Text from '@/components/common/Text';
import DropdownMenu from '@/components/common/DropdownMenu';
import { COLORS } from '@/constants/styles';
import { projectsDummydata } from 'src/dummyData';

import ProjectList from '@/components/domain/Project/ProjectList';
import * as style from './ProjectListTemplate.style';

const ProjectListTemplate = () => {
  const projectSortMethods = ['인기순', '최신순'] as const;
  const [sortMethod, setSortMethod] =
    useState<typeof projectSortMethods[number]>('인기순');

  return (
    <style.Wrapper>
      <style.HeaderWrap>
        <style.TitleWrap>
          <Text fontStyleName="title" color={COLORS.grayscale.gray600}>
            세상의 푸르름을 위한 프로젝트
          </Text>
          <Text
            fontStyleName="body1R"
            color={COLORS.grayscale.gray500}
            className="sub-title"
          >
            다양한 프로젝트들을 구경해보고 프로젝트에 참여해보세요!
          </Text>
        </style.TitleWrap>
        <DropdownMenu
          menuList={projectSortMethods}
          selectedMenu={sortMethod}
          setSelectedMenu={setSortMethod}
          className="sort-method-dropdown-menu"
        />
      </style.HeaderWrap>
      <ProjectList data={projectsDummydata} />
    </style.Wrapper>
  );
};

export default ProjectListTemplate;
