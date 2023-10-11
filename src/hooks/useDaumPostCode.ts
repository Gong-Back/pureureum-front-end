import { useEffect, useState } from 'react';

import { type AddressType, type CoordinateType } from '@/constants/types';

const useDaumPostCode = () => {
  const [sdkScriptLoaded, setSdkScriptLoaded] = useState({
    daumPostCode: false,
    kakaoMap: false,
  });
  const [address, setAddress] = useState<AddressType>({
    county: '',
    city: '',
    district: '',
    detail: '',
    jibun: '',
  });
  const [coordinate, setCoordinate] = useState<CoordinateType>({
    longitude: '',
    latitude: '',
  });

  // TODO : 두 개의 Script 를 useEffect 에서 로드하는 것 말고, next/script로 로드하는 방법 강구해보기.
  useEffect(() => {
    const postCodeScript = document.createElement('script');
    postCodeScript.src = `https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`;
    postCodeScript.addEventListener('load', () =>
      setSdkScriptLoaded((prev) => ({ ...prev, daumPostCode: true })),
    );

    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false&libraries=services`;
    kakaoMapScript.addEventListener('load', () =>
      setSdkScriptLoaded((prev) => ({ ...prev, kakaoMap: true })),
    );

    document.head.appendChild(postCodeScript);
    document.head.appendChild(kakaoMapScript);
  }, []);

  const isAllScriptLoaded = Object.values(sdkScriptLoaded).every(Boolean);

  const openPostCode = () => {
    if (typeof window === 'undefined' || !isAllScriptLoaded) return;

    const { kakao, daum } = window;

    new daum.Postcode({
      oncomplete(data: {
        address: string;
        sido: string;
        sigungu: string;
        bname: string;
        jibunAddress: string;
        autoJibunAddress: string;
        buildingName: string;
      }) {
        const jibun =
          (data.jibunAddress || data.autoJibunAddress).split(' ').at(-1) ?? '';
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
        kakao.maps.load(() => {
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(
            data.jibunAddress,
            ([{ x: longitude, y: latitude }]: { x: string; y: string }[]) =>
              setCoordinate({ longitude, latitude }),
          );
        });
      },
    }).open({
      left: window.screen.width / 2 - 250,
      top: window.screen.height / 2 - 300,
      autoClose: true,
      popupTitle: '신규 등록 시설 주소 검색',
    });
  };

  return { openPostCode, address, coordinate };
};

export default useDaumPostCode;
