import React from 'react';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import useKakaoMap from '@/hooks/useKakaoMap';

import * as style from './LocationBox.style';

export interface LocationBoxProps {
  latitude?: number;
  longitude?: number;
  name: string;
  address: string;
  haveCheckBox?: boolean;
  checked?: boolean;
}

// TODO 주소 데이터 개편이 필요함..
const LocationBox = ({
  latitude = 33.450701,
  longitude = 126.570667,
  name = '감자농장',
  address = '서울시 영등포구 가마산로 9갈 어쩌구',
  haveCheckBox = false,
  checked,
}: LocationBoxProps) => {
  const { mapContainerRef } = useKakaoMap(latitude, longitude);

  return (
    <style.Wrapper>
      <style.MapContainer ref={mapContainerRef} style={{ width: 360, height: 187 }} />
      <style.TextContainer>
        <style.Title>
          {haveCheckBox && <style.CheckBox type="checkbox" checked={checked} />}
          <Text color={COLORS.grayscale.gray600} fontStyleName="body1B">
            {name}
          </Text>
        </style.Title>
        <Text color={COLORS.grayscale.gray500} fontStyleName="body2R">
          {address}
        </Text>
      </style.TextContainer>
    </style.Wrapper>
  );
};

export default LocationBox;
