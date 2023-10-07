import { useState } from 'react';

import DropdownMenu from '@/components/common/DropdownMenu';
import Text from '@/components/common/Text';
import ProjectList from '@/components/domain/Project/ProjectList';
import { COLORS } from '@/constants/styles';
import { useGetProjectList } from '@/query-hooks/project';

import * as style from './ProjectListTemplate.style';

const PROJECT_SORT_TYPE = {
  '인기순': 'POPULAR',
  '최신순': 'LATEST',
} as const;

const ProjectListTemplate = () => {
  const [sortMethod, setSortMethod] =
    useState<keyof typeof PROJECT_SORT_TYPE>('인기순');

  console.log({sortMethod, searchType: PROJECT_SORT_TYPE[sortMethod]});

  const { data } = useGetProjectList({ searchType: PROJECT_SORT_TYPE[sortMethod] });

  if (!data) return null;

  return (
    <style.Wrapper>
      <style.HeaderWrap>
        <style.TitleWrap>
          <Text fontStyleName="title" color={COLORS.grayscale.dark}>
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
          menuList={Object.keys(PROJECT_SORT_TYPE)}
          selectedMenu={sortMethod}
          setSelectedMenu={setSortMethod}
          className="sort-method-dropdown-menu"
        />
      </style.HeaderWrap>
      <ProjectList data={data.projectList} />
    </style.Wrapper>
  );
};

export default ProjectListTemplate;
