/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouter } from 'next/router';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';

import Text from '@/components/common/Text';
import ProjectInfoForm from '@/components/domain/Project/ProjectInfoForm';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectRegisterTemplate.style';

const ProjectCreationTemplate = () => {
  const router = useRouter();

  return (
    <style.Wrapper>
      <style.Header>
        <LeftIconSvg
          width={35}
          height={35}
          fill={COLORS.grayscale.gray700}
          onClick={() => router.back()}
        />
        <Text color={COLORS.grayscale.gray700} fontStyleName="title">
          프로젝트 생성
        </Text>
      </style.Header>
      <ProjectInfoForm />
    </style.Wrapper>
  );
};
export default ProjectCreationTemplate;
