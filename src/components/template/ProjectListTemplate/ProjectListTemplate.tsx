import { useState } from 'react';

import DropdownMenu from '@/components/common/DropdownMenu';
import Text from '@/components/common/Text';
import ProjectList from '@/components/domain/Project/ProjectList';
import ProjectFilterMenu from '@/components/domain/Project/ProjectFilterMenu';
import { COLORS } from '@/constants/styles';
import { ProjectSortType } from '@/constants/types';
import { useGetProjectList } from '@/query-hooks/project';

import { projectsDummydata } from 'src/dummyData';

import * as style from './ProjectListTemplate.style';

const PROJECT_SORT_TYPE: Record<string, ProjectSortType> = {
  인기순: 'POPULAR',
  최신순: 'LATEST',
  참여순: 'PARTICIPANT',
} as const;

const ProjectListTemplate = () => {
  const [sortMethod, setSortMethod] =
    useState<keyof typeof PROJECT_SORT_TYPE>('인기순');

  // const { data: projectListRes } = useGetProjectList({
  //   searchType: PROJECT_SORT_TYPE[sortMethod],
  // });

  const projectListRes = { projectList: projectsDummydata };

  return (
    <style.Wrapper>
      <style.HeaderWrap>
        <style.TitleWrap>
          <Text fontStyleName="title" color={COLORS.grayscale.dark}>
            성동구 문화 컨텐츠 목록
          </Text>
          <Text
            fontStyleName="body1R"
            color={COLORS.grayscale.gray500}
            className="sub-title"
          >
            다양한 문화 컨텐츠들을 살펴보고 자유롭게 참여해보세요!
          </Text>
        </style.TitleWrap>
        <style.DropdownWrap>
          <DropdownMenu
            menuList={Object.keys(PROJECT_SORT_TYPE)}
            selectedMenu={sortMethod}
            setSelectedMenu={setSortMethod}
            className="sort-method-dropdown-menu"
          />
          <ProjectFilterMenu />
        </style.DropdownWrap>
      </style.HeaderWrap>
      <ProjectList data={projectListRes.projectList} />
    </style.Wrapper>
  );
};

export default ProjectListTemplate;
