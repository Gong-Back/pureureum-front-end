import React from 'react';
import { useRouter } from 'next/router';

import FacilityInfoForm from '@/components/domain/MyPage/FacilityInfoForm';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

import ChevronLeftIconSvg from '@/assets/icons/ChevronLeftIcon.svg';

import { CategoryType } from '@/constants/types';

import { COLORS } from '@/constants/styles';
import * as style from './AddFacilityTemplate.style';

interface AddFacilityTemplateProps {
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

const AddFacilityTemplate = ({
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
}: AddFacilityTemplateProps) => {
  const router = useRouter();

  return (
    <style.Wrapper>
      <style.Header>
        <ChevronLeftIconSvg onClick={() => router.back()} />
        <Text color={COLORS.grayscale.gray700} fontStyleName="title">
          신규 시설 등록
        </Text>
      </style.Header>
      <style.Main>
        <FacilityInfoForm
          category={category}
          name={name}
          city={city}
          county={county}
          district={district}
          detail={detail}
          certificationDoc={certificationDoc}
          fileInputRef={fileInputRef}
          handleFormInput={handleFormInput}
          handleSelectCategory={handleSelectCategory}
          handleUploadFile={handleUploadFile}
        />
        <style.ButtonBox>
          <Button isRound isFilled sizeType="large" className="bottom-btn">
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
      </style.Main>
    </style.Wrapper>
  );
};

export default AddFacilityTemplate;
