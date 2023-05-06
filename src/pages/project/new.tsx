import React, { useCallback, useRef, useState } from 'react';
import { NextPage } from 'next';
import ProjectCreationTemplate from '@/components/template/ProjectCreationTemplate';
import { ProjectCreationInputType } from '@/constants/types';
import ValidationUtil from '@/utils/validation';

const ProjectCreationPage: NextPage = () => {
  const feedbackRef =
    useRef<HTMLParagraphElement>() as React.MutableRefObject<HTMLParagraphElement>;

  const [currentStep, setCurrentStep] = useState(1);
  const [projectInformation, setProjectInformation] =
    useState<ProjectCreationInputType>({
      title: '',
      guide: '',
      introduction: '',
      content: '',
      projectStartDate: { year: '', month: '', day: '' },
      projectEndDate: { year: '', month: '', day: '' },
      totalRecruits: 0,
      minAge: -1,
      maxAge: -1,
      paymentType: 'NONE',
      amount: 0,
      notice: '',
      refundInstruction: '',
      depositionInformation: '',
      thumnail: 'any',
    });

  const {
    title,
    introduction,
    totalRecruits,
    projectStartDate,
    projectEndDate,
    notice,
  } = projectInformation;

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (title === '') {
        feedbackRef.current.innerText = '제목을 입력해주세요';
        return;
      }
    } else if (currentStep === 2) {
      if (introduction === '') {
        feedbackRef.current.innerText = '한 줄 소개를 입력해주세요';
        return;
      }
      if (totalRecruits === 0) {
        feedbackRef.current.innerText = '모집 인원을 설정해주세요';
        return;
      }
      if (
        !ValidationUtil.validateDate(
          projectStartDate.year,
          projectStartDate.month,
          projectStartDate.day,
        ) ||
        !ValidationUtil.validateDate(
          projectEndDate.year,
          projectEndDate.month,
          projectEndDate.day,
        )
      ) {
        feedbackRef.current.innerText =
          '유효한 프로젝트 시작 혹은 종료 날짜를 설정해주세요.';
        return;
      }
      if (notice === '') {
        feedbackRef.current.innerText =
          '프로젝트 관련 유의사항을 기재해 주세요.';
        return;
      }
    }

    feedbackRef.current.innerText = '';
    setCurrentStep((prev) => prev + 1);
  };

  const scrollRef = useCallback((node: HTMLDivElement) => {
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <ProjectCreationTemplate
      feedbackRef={feedbackRef}
      scrollRef={scrollRef}
      projectInformation={projectInformation}
      setProjectInformation={setProjectInformation}
      currentStep={currentStep}
      handleNextStep={handleNextStep}
    />
  );
};

export default ProjectCreationPage;
