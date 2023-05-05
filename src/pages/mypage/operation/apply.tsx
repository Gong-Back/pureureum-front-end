import React, { useState } from 'react';

import AddFacilityTemplate from '@/components/template/AddFacilityTemplate';

import { AddFacilityInputType } from '@/constants/types';

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

  return (
    <AddFacilityTemplate
      category={facilityInformation.category}
      name={facilityInformation.name}
      city={facilityInformation.city}
      county={facilityInformation.county}
      district={facilityInformation.district}
      detail={facilityInformation.detail}
      certificationDoc={facilityInformation.certificationDoc}
      setFacilityInformation={setFacilityInformation}
    />
  );
};
export default Apply;
