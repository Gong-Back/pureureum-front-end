import { useRouter } from 'next/router';
import React from 'react';

import LeftIconSvg from '@/assets/icons/leftIcon.svg';
import Text from '@/components/common/Text';
import FacilityInfoForm from '@/components/domain/MyPage/FacilityInfoForm';
import { COLORS } from '@/constants/styles';

import * as style from './AddFacilityTemplate.style';

const AddFacilityTemplate = () => {
  const router = useRouter();

  return (
    <style.Wrapper>
      <style.Header>
        <LeftIconSvg
          width={35}
          height={35}
          fill={COLORS.grayscale.gray700}
          onClick={() => router.back()}
        />
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
