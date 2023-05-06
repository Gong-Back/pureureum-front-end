import { useEffect, useRef, useState } from 'react';

const useKakaoMap = (latitude: number, longitude: number) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainer = useRef(null);

  // 카카오 map script 불러오기
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`;
    $script.addEventListener('load', () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  // 카카오 map load
  useEffect(() => {
    if (!mapLoaded) return;

    const { kakao } = window;
    kakao.maps.load(() => {
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
        scrollwheel: false,
      };
      const map = new kakao.maps.Map(mapContainer.current, mapOptions);
      const mapMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
        map,
      });
    });
  }, [mapLoaded, latitude, longitude]);

  return mapContainer;
};

export default useKakaoMap;
