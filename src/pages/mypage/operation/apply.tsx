import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import AddFacilityTemplate from '@/components/template/AddFacilityTemplate';

import { FacilityRepository } from '@/apis/facility';
import { AddFacilityInputType } from '@/constants/types';

const Apply = () => {
  const router = useRouter();
  const feedbackRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const [facilityInformation, setFacilityInformation] =
    useState<AddFacilityInputType>({
      category: 'YOUTH_FARMING',
      name: '',
      city: '',
      county: '',
      district: '',
      jibun: '',
      detail: '',
      certificationDoc: null,
    });

  const {
    category,
    name,
    city,
    county,
    district,
    jibun,
    detail,
    certificationDoc,
  } = facilityInformation;

  const isValidAddress = [city, county, district, jibun, detail].every(Boolean);
  const isPossibleSubmit = !!name && isValidAddress && !!certificationDoc;

  const submitFacilityInfo = async () => {
    if (!name) {
      feedbackRef.current.innerText = '시설 이름을 입력하지 않았습니다.';
      return;
    }
    if (!isValidAddress) {
      feedbackRef.current.innerText =
        '시설 주소를 올바르게 입력하지 않았습니다.';
      return;
    }
    if (!certificationDoc) {
      feedbackRef.current.innerText = '시설 증빙 서류를 첨부하지 않았습니다.';
      return;
    }
    const response = await FacilityRepository.registerFacilityAsync(
      category,
      name,
      city,
      county,
      district,
      jibun,
      detail,
      certificationDoc,
    );
    if (response.isSuccess) router.replace('/mypage/operation/manage');
    const [errorMessage] = response.result.messages;
    feedbackRef.current.innerText = errorMessage;
  };

  return (
    <AddFacilityTemplate
      category={category}
      name={name}
      city={city}
      county={county}
      district={district}
      jibun={jibun}
      detail={detail}
      certificationDoc={certificationDoc}
      feedbackRef={feedbackRef}
      isPossibleSubmit={isPossibleSubmit}
      setFacilityInformation={setFacilityInformation}
      submitFacilityInfo={submitFacilityInfo}
    />
  );
};
export default Apply;
