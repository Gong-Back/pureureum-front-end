import React, { useState, useRef } from 'react';

import AddFacilityTemplate from '@/components/template/AddFacilityTemplate';

import { AddFacilityInputType } from '@/constants/types/facilityTypes';
import { CategoryType } from '~/src/constants/types';

const MAX_FILE_SIZE = 3 * 1024 * 1024;

const Apply = () => {
  const [facilityInformation, setFacilityInformation] =
    useState<AddFacilityInputType>({
      category: 'YOUTH_FARMING',
      name: '',
      city: '',
      county: '',
      district: '',
      detail: '',
      certificationDoc: null,
    });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: inputName, value } = e.target;
    setFacilityInformation((prev) => ({ ...prev, [inputName]: value }));
    console.log('?');
  };

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [uploadedFile] = e.target.files ?? [];
    if (!uploadedFile || uploadedFile.size > MAX_FILE_SIZE) return;
    setFacilityInformation((prev) => ({
      ...prev,
      certificationDoc: uploadedFile,
    }));
  };

  const handleSelectCategory = (category: CategoryType) => {
    setFacilityInformation((prev) => ({ ...prev, category }));
  };

  return (
    <AddFacilityTemplate
      category={facilityInformation.category}
      name={facilityInformation.name}
      city={facilityInformation.city}
      county={facilityInformation.county}
      district={facilityInformation.district}
      detail={facilityInformation.detail}
      certificationDoc={facilityInformation.certificationDoc}
      fileInputRef={fileInputRef}
      handleFormInput={handleFormInput}
      handleSelectCategory={handleSelectCategory}
      handleUploadFile={handleUploadFile}
    />
  );
};
export default Apply;
