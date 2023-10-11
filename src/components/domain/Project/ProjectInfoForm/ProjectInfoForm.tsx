/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';

import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { ProjectRepository } from '@/apis/project';
import Button from '@/components/common/Button';
import PROJECT_REGISTER_FALLBACK from '@/constants/fallback/projectRegister';
import { COLORS } from '@/constants/styles';
import { ProjectFormType } from '@/constants/types';
import FormatUtil from '@/utils/format';
import ValidationUtil from '@/utils/validation';

import FirstStepForm from './FirstStepForm';
import * as style from './ProjectInfoForm.style';
import SecondStepForm from './SecondStepForm';
import ThirdStepForm from './ThirdStepForm';

const ProjectInfoForm = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const scrollRef = useCallback((node: HTMLDivElement) => {
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  const formMethods = useForm<ProjectFormType>({
    defaultValues: {},
  });

  const {
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const [
    totalRecruits,
    minAge,
    maxAge,
    projectStartDate,
    projectEndDate,
    paymentType,
  ] = useWatch({
    control,
    name: [
      'totalRecruits',
      'minAge',
      'maxAge',
      'projectStartDate',
      'projectEndDate',
      'paymentType',
    ],
  });

  const goNextStep = () => {
    if (
      currentStep === 2 &&
      (!ValidationUtil.validateDate(
        projectStartDate.year,
        projectStartDate.month,
        projectStartDate.day,
      ) ||
        !ValidationUtil.validateDate(
          projectEndDate.year,
          projectEndDate.month,
          projectEndDate.day,
        ))
    ) {
      setError('root', {
        message: PROJECT_REGISTER_FALLBACK.INVALID_DATE_RANGE,
      });
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const submitProjectForm: SubmitHandler<ProjectFormType> = async (
    formValue,
  ) => {
    try {
      await ProjectRepository.registerProjectAsync({
        ...formValue,
        totalRecruits: totalRecruits < 1 ? -1 : totalRecruits,
        projectStartDate: FormatUtil.formatDateFromObj(
          formValue.projectStartDate,
        ),
        projectEndDate: FormatUtil.formatDateFromObj(formValue.projectEndDate),
      });
      router.replace('/mypage/operation/project');
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
      } else {
        throw error;
      }
    }
  };

  const renderFeedbackMessage = () => {
    if (errors.title?.type === 'required') return errors.title.message;
    if (errors.introduction?.type === 'required')
      return errors.totalRecruits?.message;
    if (errors.totalRecruits?.type === 'required')
      return errors.introduction?.message;
    return errors.root?.message;
  };

  return (
    <FormProvider {...formMethods}>
      <FirstStepForm control={control} />
      {currentStep > 1 && (
        <SecondStepForm
          scrollRef={scrollRef}
          control={control}
          setValue={setValue}
          totalRecruits={totalRecruits}
          minAge={minAge}
          maxAge={maxAge}
        />
      )}
      {currentStep > 2 && (
        <ThirdStepForm
          scrollRef={scrollRef}
          control={control}
          paymentType={paymentType}
        />
      )}

      <style.BottomBar>
        <style.Feedback>{renderFeedbackMessage()}</style.Feedback>

        <Button
          onClick={handleSubmit(
            currentStep < 3 ? goNextStep : submitProjectForm,
          )}
          isRound
          isFilled
        >
          {currentStep < 3 ? '다음' : '신청 완료'}
        </Button>
        <Button
          onClick={() => router.back()}
          isRound
          themeColor={COLORS.grayscale.gray400}
        >
          취소
        </Button>
      </style.BottomBar>
    </FormProvider>
  );
};

export default ProjectInfoForm;
