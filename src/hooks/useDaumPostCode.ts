import { useEffect, useState } from 'react';

import { AddressType } from '@/constants/types';
import { COLORS } from '@/constants/styles';

const useDaumPostCode = () => {
  const [postCodeLoaded, setPostCodeLoaded] = useState(false);
  const [address, setAddress] = useState<AddressType>({
    county: '',
    city: '',
    district: '',
    detail: '',
    jibun: '',
  });

  // Daum PostCode API Script 로드
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`;
    $script.addEventListener('load', () => setPostCodeLoaded(true));
    document.head.appendChild($script);
  }, []);

  const openPostCode = () => {
    if (typeof window === 'undefined' || !postCodeLoaded) return;

    new window.daum.Postcode({
      // theme: {
      //   bgColor: COLORS.background2,
      //   searchBgColor: COLORS.primary.green600,
      //   pageBgColor: COLORS.grayscale.cremeWhite,
      //   textColor: COLORS.grayscale.gray700,
      //   queryTextColor: COLORS.background,
      //   postcodeTextColor: COLORS.caption,
      //   emphTextColor: COLORS.primary.green600,
      //   outlineColor: COLORS.grayscale.gray100,
      // },
      oncomplete(data: {
        sido: string;
        sigungu: string;
        bname: string;
        jibunAddress: string;
        buildingName: string;
      }) {
        const jibun = data.jibunAddress.split(' ').at(-1) ?? '';
        const {
          sido: county,
          sigungu: city,
          bname: district,
          buildingName: detail,
        } = data;
        setAddress({
          county,
          city,
          district,
          jibun,
          detail,
        });
      },
    }).open({
      left: window.screen.width / 2 - 250,
      top: window.screen.height / 2 - 300,
      autoClose: true,
      popupTitle: '신규 등록 시설 주소 검색',
    });
  };

  return { openPostCode, address };
};

export default useDaumPostCode;
