import React from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import CategoryTag from '@/components/common/CategoryTag';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import useDaumPostCode from '@/hooks/useDaumPostCode';

import { CategoryType } from '@/constants/types';

import { COLORS } from '@/constants/styles';
import * as style from './FacilityInfoForm.style';

interface FacilityInfoFormProps {
  category: CategoryType;
  name: string;
  city: string;
  county: string;
  district: string;
  detail: string;
  certificationDoc: File | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFormInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectCategory: (category: CategoryType) => void;
  handleUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FacilityInfoForm = ({
  category,
  name,
  city,
  county,
  district,
  detail,
  certificationDoc,
  fileInputRef,
  handleFormInput,
  handleSelectCategory,
  handleUploadFile,
}: FacilityInfoFormProps) => {
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'tablet', 'pc']);
  const { openPostCode, address } = useDaumPostCode();
  const openFileUploadDialog = () => fileInputRef.current?.click();

  const isMobile = currentBreakpoint === 'mobile';
  const isValidAddress = [city, county, district].every(
    (value) => value.length,
  );

  console.log(address);

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
              ? `${city} ${county} ${district}`
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
            certificationDoc?.name ??
            '시설 인증을 할 수 있는 서류를 첨부해주세요'
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
        <Button isFilled className="find-button" onClick={openFileUploadDialog}>
          파일 찾기
        </Button>
      </style.FacilityDocsForm>
    </style.Wrapper>
  );
};
export default FacilityInfoForm;
