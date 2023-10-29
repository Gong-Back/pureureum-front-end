import { QueryClient, dehydrate } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';
import React, { useState } from 'react';

import { ProjectRepository } from '@/apis/project';
import Text from '@/components/common/Text';
import ProjectList from '@/components/domain/Project/ProjectList/ProjectList';
import QUERY_KEY from '@/constants/apis/queryKey';
import { COLORS } from '@/constants/styles';
import { ProjectSortType } from '@/constants/types';
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
  // const { data: popularProjectRes } = useGetProjectList({
  //   searchType: 'POPULAR',
  // });
  // const { data: latestProjectRes } = useGetProjectList({
  //   searchType: 'LATEST',
  // });

  // FIXME : API 연결 이전에 등록된 Dummy Data
  const popularProjectRes = { projectList: projectsDummydata };
  const latestProjectRes = { projectList: projectsDummydata };

  return (
    <style.Wrapper>
      <style.Carousel />
      <style.ProjectListWrap>
        <Text
          fontStyleName="title"
          color={COLORS.grayscale.dark}
          className="title"
        >
          많은 관심을 보인 문화 컨텐츠 🎉
        </Text>
        <ProjectList data={popularProjectRes.projectList} />
      </style.ProjectListWrap>
      <style.ProjectListWrap>
        <Text
          fontStyleName="title"
          color={COLORS.grayscale.dark}
          className="title"
        >
          참여자가 많은 문화 컨텐츠 💡
        </Text>
        <ProjectList data={latestProjectRes.projectList} />
      </style.ProjectListWrap>
    </style.Wrapper>
  );
};
export default HomeTemplate;
