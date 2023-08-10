/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouter } from 'next/router';
import LeftIconSvg from '@/assets/icons/leftIcon.svg';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import * as ProjectForm from '@/components/domain/Project/ProjectCreationForm';

import { ProjectCreationInputType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectCreationTemplate.style';

export interface ProjectCreationTemplateProps {
  feedbackRef: React.MutableRefObject<HTMLParagraphElement>;
  scrollRef: (node: HTMLDivElement) => void;
  projectInformation: ProjectCreationInputType;
  setProjectInformation: any;
  currentStep: number;
  handleNextStep: (step: number) => void;
}

const ProjectCreationTemplate = ({
  feedbackRef,
  scrollRef,
  projectInformation,
  setProjectInformation,
  currentStep,
  handleNextStep,
}: ProjectCreationTemplateProps) => {
  const {
    title,
    guide,
    introduction,
    content,
    projectStartDate,
    projectEndDate,
    totalRecruits,
    minAge,
    maxAge,
    notice,
    paymentType,
    refundInstruction,
    depositionInformation,
    thumnail,
  } = projectInformation;
  const router = useRouter();

  const handleFormInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name: inputName, value } = e.target;
    setProjectInformation((prev: ProjectCreationInputType) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  return (
    <>
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
        <ProjectForm.Step1
          title={title}
          guide={guide}
          handleFormInput={handleFormInput}
        />
        {currentStep > 1 && (
          <ProjectForm.Step2
            stepRef={scrollRef}
            introduction={introduction}
            content={content}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            totalRecruits={totalRecruits}
            minAge={minAge}
            maxAge={maxAge}
            notice={notice}
            thumnail={thumnail}
            handleFormInput={handleFormInput}
            setProjectInformation={setProjectInformation}
          />
        )}
        {currentStep > 2 && (
          <ProjectForm.Step3
            stepRef={scrollRef}
            paymentType={paymentType}
            refundInstruction={refundInstruction}
            depositionInformation={depositionInformation}
            handleFormInput={handleFormInput}
          />
        )}
      </style.Wrapper>
      <style.BottomBar>
        <style.Feedback ref={feedbackRef} />
        <Button onClick={() => handleNextStep(currentStep)} isRound isFilled>
          {currentStep !== 3 ? '다음' : '신청 완료'}
        </Button>
        <Button
          onClick={() => router.back()}
          isRound
          themeColor={COLORS.grayscale.gray400}
        >
          취소
        </Button>
      </style.BottomBar>
    </>
  );
};
export default ProjectCreationTemplate;
