/* eslint-disable react/jsx-props-no-spreading */
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import {
  Controller,
  FormProvider,
  type SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';

import { ApiErrorInstance } from '@/apis/API';
import { FacilityRepository } from '@/apis/facility';
import Button from '@/components/common/Button';
import CategoryTag from '@/components/common/CategoryTag';
import FormLabel from '@/components/common/FormLabel';
import NewTextInput from '@/components/common/TextInput/NewTextInput';
import { COLORS } from '@/constants/styles';
import { type CategoryType, type FacilityFormType } from '@/constants/types';
import useDaumPostCode from '@/hooks/useDaumPostCode';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
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
      coordinate: {
        longitude: '',
        latitude: '',
      },
      category: 'YOUTH_FARMING',
      certificationDoc: undefined,
    },
  });
  const {
    control,
    setValue,
    setError,
    formState: { errors },
    handleSubmit,
  } = formMethods;

  const router = useRouter();
  const { openPostCode, address, coordinate } = useDaumPostCode();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'tablet', 'pc']);
  const { fileInputRef, handleUploadFile, removeUploadedFile } = useUploadFile({
    maxFileSize: 10 * 1024 * 1024,
    allowFileTypes: ['png', 'jpg'],
    onError: {
      exceedFileSize: () =>
        setError('root', {
          message: '파일 용량은 최대 10MB 입니다.',
        }),
      mismatchExtractType: () =>
        setError('root', {
          message: '올바른 파일 확장자가 아닙니다. (png, jpg)',
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
    const {
      address: finalAddress,
      coordinate: finalCoordinate,
      ...rest
    } = formValue;
    if (!finalAddress) {
      setError('root', { message: '주소를 설정하지 않았습니다.' });
      return;
    }
    try {
      await FacilityRepository.registerFacilityAsync({
        ...rest,
        ...finalAddress,
        ...finalCoordinate,
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
    setValue('coordinate', coordinate);
  }, [address, coordinate, isValidAddress, setValue]);

  return (
    <FormProvider {...formMethods}>
      <style.Wrapper>
        <style.ProjectTypeSelect>
          <FormLabel isEssential text="카테고리" className="title" />
          <Controller
            control={control}
            name="category"
            defaultValue="YOUTH_FARMING"
            render={({ field: { onChange, value: selectedOption } }) => (
              <>
                {FACILITY_CATEGORIES.map((option) => (
                  <CategoryTag
                    key={option}
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
          <FormLabel isEssential text="시설 이름" className="title" />
          <NewTextInput
            name="name"
            rules={{ required: true, minLength: 1 }}
            placeholder="시설 이름을 지정해주세요"
            sizeType="large"
            className="name-input"
            isFilled
          />
        </style.FacilityNameForm>
        <style.FacilityLocForm>
          <FormLabel isEssential text="시설 위치" className="title" />
          <NewTextInput
            name="address"
            rules={{ required: true, minLength: 1 }}
            displayedValue={
              isValidAddress
                ? `${address.county} ${address.city} ${address.district} ${address.jibun}`
                : '주소를 지도에서 검색해주세요'
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
          <NewTextInput
            name="address.detail"
            disabled={!isValidAddress}
            placeholder={isValidAddress ? '상세 주소' : ''}
            sizeType="large"
            className="detail-input"
            isFilled
          />
        </style.FacilityLocForm>
        <style.FacilityDocsForm>
          <FormLabel isEssential text="증빙 서류" className="title" />
          <NewTextInput
            name="certificationDoc"
            rules={{ required: true }}
            displayedValue={
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
              currentCertificationDoc ? removeUploadedFile : openFileDialog
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
            isPossibleSubmit ? COLORS.primary.default : COLORS.grayscale.gray400
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
