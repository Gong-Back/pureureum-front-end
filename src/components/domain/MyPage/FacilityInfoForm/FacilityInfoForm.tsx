import React, { useEffect, useRef } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import CategoryTag from '@/components/common/CategoryTag';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useDaumPostCode from '@/hooks/useDaumPostCode';

import { AddFacilityInputType, CategoryType } from '@/constants/types';

import { COLORS } from '@/constants/styles';
import * as style from './FacilityInfoForm.style';

interface FacilityInfoFormProps {
  category: CategoryType;
  name: string;
  city: string;
  county: string;
  district: string;
  jibun: string;
  detail: string;
  certificationDoc: File | null;
  setFacilityInformation: React.Dispatch<
    React.SetStateAction<AddFacilityInputType>
  >;
}

const MAX_FILE_SIZE = 3 * 1024;
const ALLOWED_FILE_TYPE = ['pdf', 'hwp', 'docx'];

const FacilityInfoForm = ({
  category,
  name,
  city,
  county,
  district,
  jibun,
  detail,
  certificationDoc,
  setFacilityInformation,
}: FacilityInfoFormProps) => {
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'tablet', 'pc']);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { openPostCode, address } = useDaumPostCode();

  useEffect(() => {
    setFacilityInformation((prev) => ({
      ...prev,
      ...address,
    }));
  }, [address]);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setFacilityInformation((prev) => ({ ...prev, [inputName]: value }));
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    console.log(uploadedFile.type);
    if (!uploadedFile || uploadedFile.size > MAX_FILE_SIZE) return;
    setFacilityInformation((prev) => ({
      ...prev,
      certificationDoc: uploadedFile,
    }));
  };

  const handleSelectCategory = (selectedCategory: CategoryType) => {
    setFacilityInformation((prev) => ({ ...prev, category: selectedCategory }));
  };

  const openFileUploadDialog = () => fileInputRef.current?.click();
  const removeUploadedFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      setFacilityInformation((prev) => ({ ...prev, certificationDoc: null }));
    }
  };

  const isMobile = currentBreakpoint === 'mobile';
  const isValidAddress = [city, county, district, jibun].every(Boolean);

  return (
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
            category !== 'YOUTH_FARMING' ? 'not-selected' : ''
          }`}
          onClick={() => handleSelectCategory('YOUTH_FARMING')}
        />
        <CategoryTag
          type="FARMING_EXPERIENCE"
          sizeType={isMobile ? 'small' : 'big'}
          className={`farming-experience ${
            category !== 'FARMING_EXPERIENCE' ? 'not-selected' : ''
          }`}
          onClick={() => handleSelectCategory('FARMING_EXPERIENCE')}
        />
        <CategoryTag
          type="FARMING_HEALING"
          sizeType={isMobile ? 'small' : 'big'}
          className={`farming-healing ${
            category !== 'FARMING_HEALING' ? 'not-selected' : ''
          }`}
          onClick={() => handleSelectCategory('FARMING_HEALING')}
        />
        <CategoryTag
          type="ETC"
          sizeType={isMobile ? 'small' : 'big'}
          className={`etc ${category !== 'ETC' ? 'not-selected' : ''}`}
          onClick={() => handleSelectCategory('ETC')}
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
          onChange={handleFormInput}
          value={name}
          name="name"
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
          value={
            isValidAddress
              ? `${county} ${city} ${district} ${jibun}`
              : '먼저 지도에서 주소를 검색해주세요'
          }
          readOnly
          placeholder="주소를 지도에서 검색해주세요"
          sizeType="large"
          className="loc-input"
          isFilled
        />
        <Button isFilled className="search-button" onClick={openPostCode}>
          지도 검색
        </Button>
        <TextInput
          onChange={handleFormInput}
          value={detail}
          name="detail"
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
          value={
            certificationDoc
              ? `${certificationDoc.name} (${(
                  certificationDoc.size / 1024
                ).toFixed(1)}MB)`
              : '시설 인증을 할 수 있는 서류를 첨부해주세요'
          }
          placeholder=""
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
          onClick={certificationDoc ? removeUploadedFile : openFileUploadDialog}
        >
          {certificationDoc ? '파일 제거 ' : '파일 찾기'}
        </Button>
      </style.FacilityDocsForm>
    </style.Wrapper>
  );
};
export default FacilityInfoForm;
