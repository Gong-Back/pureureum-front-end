import React from 'react';
import { useRouter } from 'next/router';

import FacilityInfoForm from '@/components/domain/MyPage/FacilityInfoForm';
import Text from '@/components/common/Text';

import ChevronLeftIconSvg from '@/assets/icons/ChevronLeftIcon.svg';

import { COLORS } from '@/constants/styles';
import * as style from './AddFacilityTemplate.style';

const AddFacilityTemplate = () => {
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
        <FacilityInfoForm />
      </style.Main>
    </style.Wrapper>
  );
};

export default AddFacilityTemplate;
