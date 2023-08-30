/* eslint-disable no-unused-vars */
import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { FieldErrors } from 'react-hook-form';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import ProjectInfoForm from '@/components/domain/Project/ProjectCreationForm';
import { COLORS } from '@/constants/styles';
import { ProjectFormType } from '@/constants/types';

import * as style from './ProjectCreationTemplate.style';

interface SubmitFunc {
  submitForm:
    | (() => void)
    | ((
        e?: React.BaseSyntheticEvent<object, any, any> | undefined,
      ) => Promise<void>);
  errors: FieldErrors<ProjectFormType>;
}

// export interface ProjectCreationTemplateProps {}

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
