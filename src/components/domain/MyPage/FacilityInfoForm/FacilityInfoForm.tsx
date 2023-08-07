/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm, FormProvider, type SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

import { ApiErrorInstance } from '@/apis/API';
import { FacilityRepository } from '@/apis/facility';

import { COLORS } from '@/constants/styles';
import { type FacilityFormType } from '@/constants/types';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import CategoryTag from '@/components/common/CategoryTag';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useDaumPostCode from '@/hooks/useDaumPostCode';
import useUploadFile from '@/hooks/useUploadFile';

import FormatUtil from '@/utils/format';

import * as style from './FacilityInfoForm.style';

const FacilityInfoForm = () => {
  const formMethods = useForm<FacilityFormType>({
    defaultValues: {
      name: '',
      detail: '',
      category: 'YOUTH_FARMING',
    },
    mode: 'onChange',
  });
  const {
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

  useEffect(() => {
    const { city, county, district, jibun, detail } = address;
    const isValidAddress = [city, county, district, jibun].every(Boolean);
    if (!isValidAddress) return;

    setValue('address', { city, county, district, jibun });
    setValue('detail', detail);
  }, [address, setValue]);

  const currentName = getValues('name');
  const currentCertificationDoc = getValues('certificationDoc');

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
          <CategoryTag
            type="YOUTH_FARMING"
            sizeType={isMobile ? 'small' : 'big'}
            className={`youth-farming ${
              getValues('category') !== 'YOUTH_FARMING' ? 'not-selected' : ''
            }`}
            onClick={() => setValue('category', 'YOUTH_FARMING')}
          />
          <CategoryTag
            type="FARMING_EXPERIENCE"
            sizeType={isMobile ? 'small' : 'big'}
            className={`farming-experience ${
              getValues('category') !== 'FARMING_EXPERIENCE'
                ? 'not-selected'
                : ''
            }`}
            onClick={() => setValue('category', 'FARMING_EXPERIENCE')}
          />
          <CategoryTag
            type="FARMING_HEALING"
            sizeType={isMobile ? 'small' : 'big'}
            className={`farming-healing ${
              getValues('category') !== 'FARMING_HEALING' ? 'not-selected' : ''
            }`}
            onClick={() => setValue('category', 'FARMING_HEALING')}
          />
          <CategoryTag
            type="ETC"
            sizeType={isMobile ? 'small' : 'big'}
            className={`etc ${
              getValues('category') !== 'ETC' ? 'not-selected' : ''
            }`}
            onClick={() => setValue('category', 'ETC')}
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
            fieldId="name"
            fieldOption={{ required: true, minLength: 1 }}
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
            fieldId="address"
            fieldOption={{ required: true, minLength: 1 }}
            value={
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
            fieldId="detail"
            fieldOption={{
              required: true,
              minLength: 1,
              disabled: !isValidAddress,
            }}
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
            fieldId="certificationDoc"
            fieldOption={{ required: true }}
            value={
              currentCertificationDoc
                ? `${currentCertificationDoc.name} (${FormatUtil.formatfileSize(
                    currentCertificationDoc.size,
                  )})`
                : undefined
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
              getValues('certificationDoc')
                ? removeUploadedFile
                : openFileDialog
            }
          >
            {getValues('certificationDoc') ? '파일 제거 ' : '파일 찾기'}
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
          onClick={() => handleSubmit(submitFacilityInfo)}
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
