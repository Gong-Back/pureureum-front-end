/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import {
  useForm,
  Controller,
  FormProvider,
  useWatch,
  type SubmitHandler,
} from 'react-hook-form';
import { useRouter } from 'next/router';

import { ApiErrorInstance } from '@/apis/API';
import { FacilityRepository } from '@/apis/facility';

import { COLORS } from '@/constants/styles';
import { type FacilityFormType, type CategoryType } from '@/constants/types';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import CategoryTag from '@/components/common/CategoryTag';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useDaumPostCode from '@/hooks/useDaumPostCode';
import useUploadFile from '@/hooks/useUploadFile';

import FormatUtil from '@/utils/format';

import * as style from './FacilityInfoForm.style';

const FACILITY_CATEGORIES: CategoryType[] = [
  'YOUTH_FARMING',
  'FARMING_EXPERIENCE',
  'FARMING_HEALING',
  'ETC',
];

const FacilityInfoForm = () => {
  const formMethods = useForm<FacilityFormType>({
    defaultValues: {
      name: '',
      address: {
        city: '',
        county: '',
        district: '',
        jibun: '',
        detail: '',
      },
      category: 'YOUTH_FARMING',
      certificationDoc: undefined,
    },
  });
  const {
    control,
    getValues,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const router = useRouter();
  const { openPostCode, address } = useDaumPostCode();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'tablet', 'pc']);
  const { fileInputRef, handleUploadFile, removeUploadedFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['pdf', 'hwp', 'docx', 'txt'],
    onError: {
      exceedFileSize: () =>
        setError('root', {
          message: '파일 용량은 최대 10MB 입니다.',
        }),
      mismatchExtractType: () =>
        setError('root', {
          message: '올바른 파일 확장자가 아닙니다. (pdf, hwp, docx, txt)',
        }),
    },
    onSubmit: (uploadedFile) => setValue('certificationDoc', uploadedFile),
    onRemove: () => setValue('certificationDoc', undefined),
  });

  const [currentName, currentCertificationDoc] = useWatch({
    control,
    name: ['name', 'certificationDoc'],
  });

  const isMobile = currentBreakpoint === 'mobile';
  const isValidAddress = Object.values(address).every(Boolean);
  const isPossibleSubmit =
    isValidAddress && !!currentName && !!currentCertificationDoc;

  const openFileDialog = () => fileInputRef.current?.click();
  const submitFacilityInfo: SubmitHandler<FacilityFormType> = async (
    formValue,
  ) => {
    const { address: finalAddress, ...rest } = formValue;
    if (!finalAddress) {
      setError('root', { message: '주소를 설정하지 않았습니다.' });
      return;
    }
    try {
      await FacilityRepository.registerFacilityAsync({
        ...rest,
        ...finalAddress,
      });
      router.replace('/mypage/operation/manage');
    } catch (error) {
      if (error instanceof ApiErrorInstance) {
        const [errorMessage] = error.messages;
        setError('root', { message: errorMessage });
      } else {
        throw error;
      }
    }
  };

  useEffect(() => {
    if (!isValidAddress) return;
    setValue('address', address);
  }, [address, isValidAddress, setValue]);

  return (
    <FormProvider {...formMethods}>
      <style.Wrapper>
        <style.ProjectTypeSelect>
          <style.FormTitle className="title">
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
              카테고리
            </Text>
            <Text
              fontStyleName="body1B"
              color={COLORS.caption}
              className="asterisk"
            >
              *
            </Text>
          </style.FormTitle>
          <Controller
            control={control}
            name="category"
            defaultValue="YOUTH_FARMING"
            render={({ field: { onChange, value: selectedOption } }) => (
              <>
                {FACILITY_CATEGORIES.map((option) => (
                  <CategoryTag
                    type={option}
                    sizeType={isMobile ? 'small' : 'big'}
                    className={`${option.toLowerCase().replace('_', '-')} ${
                      selectedOption !== option ? 'not-selected' : ''
                    }`}
                    onClick={() => onChange(option)}
                  />
                ))}
              </>
            )}
          />
        </style.ProjectTypeSelect>
        <style.FacilityNameForm>
          <style.FormTitle>
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
              시설 이름
            </Text>
            <Text
              fontStyleName="body1B"
              color={COLORS.caption}
              className="asterisk"
            >
              *
            </Text>
          </style.FormTitle>
          <TextInput
            name="name"
            rules={{ required: true, minLength: 1 }}
            placeholder="시설 이름을 지정해주세요"
            sizeType="large"
            className="name-input"
            isFilled
          />
        </style.FacilityNameForm>
        <style.FacilityLocForm>
          <style.FormTitle className="title">
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
              시설 위치
            </Text>
            <Text
              fontStyleName="body1B"
              color={COLORS.caption}
              className="asterisk"
            >
              *
            </Text>
          </style.FormTitle>
          <TextInput
            name="address"
            rules={{ required: true, minLength: 1 }}
            formatValue={() =>
              isValidAddress
                ? `${address.county} ${address.city} ${address.district} ${address.jibun}`
                : undefined
            }
            placeholder="주소를 지도에서 검색해주세요"
            sizeType="large"
            className="loc-input"
            readOnly
            isFilled
          />
          <Button isFilled className="search-button" onClick={openPostCode}>
            지도 검색
          </Button>
          <TextInput
            name="address.detail"
            rules={{
              required: true,
              minLength: 1,
            }}
            disabled={!isValidAddress}
            placeholder={isValidAddress ? '상세 주소' : ''}
            sizeType="large"
            className="detail-input"
            isFilled
          />
        </style.FacilityLocForm>
        <style.FacilityDocsForm>
          <style.FormTitle className="title">
            <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
              증빙 서류
            </Text>
            <Text
              fontStyleName="body1B"
              color={COLORS.caption}
              className="asterisk"
            >
              *
            </Text>
          </style.FormTitle>
          <TextInput
            name="certificationDoc"
            rules={{ required: true }}
            formatValue={() =>
              currentCertificationDoc
                ? `${currentCertificationDoc.name} (${FormatUtil.formatfileSize(
                    currentCertificationDoc.size,
                  )})`
                : ''
            }
            placeholder="시설 인증을 할 수 있는 서류를 첨부해주세요"
            sizeType="large"
            className="file-input"
            isFilled
            readOnly
          />
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleUploadFile}
          />
          <Button
            isFilled
            className="find-button"
            onClick={
              currentCertificationDoc
                ? removeUploadedFile
                : openFileDialog
            }
          >
            {currentCertificationDoc ? '파일 제거 ' : '파일 찾기'}
          </Button>
        </style.FacilityDocsForm>
      </style.Wrapper>
      {errors.root ? (
        <style.Feedback>{errors.root.message}</style.Feedback>
      ) : null}
      <style.ButtonBox>
        <Button
          isRound
          isFilled
          themeColor={
            isPossibleSubmit
              ? COLORS.primary.greenDefault
              : COLORS.grayscale.gray400
          }
          sizeType="large"
          className="bottom-btn"
          onClick={handleSubmit(submitFacilityInfo)}
        >
          신청 완료
        </Button>
        <Button
          isRound
          themeColor={COLORS.grayscale.gray400}
          sizeType="large"
          className="bottom-btn"
        >
          취소
        </Button>
      </style.ButtonBox>
    </FormProvider>
  );
};
export default FacilityInfoForm;
