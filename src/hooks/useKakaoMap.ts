import { useCallback, useEffect, useRef } from 'react';

const useKakaoMap = (latitude: number, longitude: number) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line no-undef
  const mapRef = useRef<kakao.maps.Map | null>(null);

  // kakao map script load 시 실행될 함수 initMapOnLoaded
  const initMapOnLoaded = useCallback(() => {
    window.kakao.maps.load(() => {
      if (!mapContainerRef.current) return;
      const centerLoc = new window.kakao.maps.LatLng(latitude, longitude);
      const mapOptions = {
        center: centerLoc,
        level: 3,
        scrollwheel: false,
      };
      mapRef.current = new window.kakao.maps.Map(
        mapContainerRef.current,
        mapOptions,
      );
      // eslint-disable-next-line no-unused-vars
      const mapMarker = new window.kakao.maps.Marker({
        position: centerLoc,
        map: mapRef.current,
      });
    });
  }, [longitude, latitude]);

  useEffect(() => {
    const kakaoMapScript = document.getElementById('kakaoMapScript');
    if (!kakaoMapScript) {
      const $script = document.createElement('script');
      $script.type = 'text/javascript';
      $script.id = 'kakaoMapScript';
      $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
      $script.addEventListener('load', initMapOnLoaded);
      document.head.appendChild($script);
    }
  }, [initMapOnLoaded]);

  /**
   * MapContainer 의 스타일이 display: none 일 경우 해당 Element 의 width, height 를 참조하지 못하여 계산이 안된다.
   * 따라서 해당 스타일이 변경되었을 경우 relayout 함수를 실행하여 map의 표시 영역을 재계산 해야 한다. 그렇지 않으면 맵이 깨진다.
   * @see https://devtalk.kakao.com/t/topic/59015
  */
  const relayOutMap = useCallback(() => {
    if (mapRef.current && mapContainerRef.current) {
      mapRef.current.relayout();
      const centerLoc = new window.kakao.maps.LatLng(latitude, longitude)
      mapRef.current.setCenter(centerLoc);
    }
  }, [latitude, longitude])


  return { mapContainerRef, mapRef, relayOutMap };
};

export default useKakaoMap;
