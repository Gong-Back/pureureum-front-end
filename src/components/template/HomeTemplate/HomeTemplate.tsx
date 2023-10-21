import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';
import React, { useState } from 'react';

import { ProjectRepository } from '@/apis/project';
import Text from '@/components/common/Text';
import CategoryFilter from '@/components/domain/Main/CategoryFilter';
import ProjectList from '@/components/domain/Project/ProjectList/ProjectList';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { CategoryType } from '@/constants/types';
import { useGetProjectList } from '@/query-hooks/project';

import { projectsDummydata } from 'src/dummyData';

import * as style from './HomeTemplate.style';

// NOTICE : Server - Side 에서 목록을 사전에 받아와 인계하는 과정
// export const getServerSideProps: GetServerSideProps = async () => {
//   const queryClient = new QueryClient();
//   await Promise.all([
//     await queryClient.prefetchQuery({
//       queryFn: () =>
//         ProjectRepository.getMainProjectListAsync({ searchType: 'POPULAR' }),
//       queryKey: QUERY_KEY.PROJECT.main({ searchType: 'POPULAR' }),
//     }),
//     await queryClient.prefetchQuery({
//       queryFn: () =>
//         ProjectRepository.getMainProjectListAsync({ searchType: 'LATEST' }),
//       queryKey: QUERY_KEY.PROJECT.main({ searchType: 'LATEST' }),
//     }),
//   ]);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };

const HomeTemplate = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryType>();

  // const { data: popularProjectRes } = useGetProjectList({
  //   searchType: 'POPULAR',
  //   category: categoryFilter,
  // });
  // const { data: latestProjectRes } = useGetProjectList({
  //   searchType: 'LATEST',
  //   category: categoryFilter,
  // });

  // FIXME : API 연결 이전에 등록된 Dummy Data
  const popularProjectRes = { projectList: projectsDummydata };
  const latestProjectRes = { projectList: projectsDummydata };

  const onClickCategoryFilter = (c: CategoryType) => {
    setCategoryFilter(c === categoryFilter ? undefined : c);
  };

  return (
    <style.Wrapper>
      <style.Carousel />
      <CategoryFilter
        activeCategory={categoryFilter}
        onClickCategory={onClickCategoryFilter}
      />
      <style.ProjectListWrap>0
        <Text
          fontStyleName="title"
          color={COLORS.grayscale.dark}
          className="title"
        >
          인기 중인 프로젝트 🎉
        </Text>
        <ProjectList data={popularProjectRes.projectList} />
      </style.ProjectListWrap>
      <style.ProjectListWrap>
        <Text
          fontStyleName="title"
          color={COLORS.grayscale.dark}
          className="title"
        >
          신규 생성된 프로젝트 🌱
        </Text>
        <ProjectList data={latestProjectRes.projectList} />
      </style.ProjectListWrap>
    </style.Wrapper>
  );
};
export default HomeTemplate;
