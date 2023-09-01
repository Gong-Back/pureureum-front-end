import React from 'react';
import Text from '@/components/common/Text';
import ProjectList from '@/components/domain/Project/ProjectList/ProjectList';
import { COLORS } from '@/constants/styles';
import { ProjectResponses } from '@/constants/types';

import * as style from './HomeTemplate.style';

export interface HomeTemplateProps {
  popularProjects: Array<ProjectResponses['main']>;
  newProjects: Array<ProjectResponses['main']>;
}

const HomeTemplate = ({ popularProjects, newProjects }: HomeTemplateProps) => (
  <style.Wrapper>
    <style.Carousel />
    <style.ProjectListWrap>
      <Text
        fontStyleName="title"
        color={COLORS.grayscale.gray600}
        className="title"
      >
        인기 중인 프로젝트 🎉
      </Text>
      <ProjectList data={popularProjects} />
    </style.ProjectListWrap>
    <style.ProjectListWrap>
      <Text
        fontStyleName="title"
        color={COLORS.grayscale.gray600}
        className="title"
      >
        신규 생성된 프로젝트 🌱
      </Text>
      <ProjectList data={newProjects} />
    </style.ProjectListWrap>
  </style.Wrapper>
);
export default HomeTemplate;
