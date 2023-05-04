import { useEffect, useState } from 'react';

const useDaumPostCode = () => {
  const [postCodeLoaded, setPostCodeLoaded] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  // Daum PostCode API Script 로드
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js`;
    $script.addEventListener('load', () => setPostCodeLoaded(true));
    document.head.appendChild($script);
  }, []);

  const openPostCode = () => {
    if (!postCodeLoaded) return;

    const { daum } = window;
    new daum.Postcode({
      oncomplete(data: { address: string }) {
        setAddress(data.address);
      },
    }).open();
  };

  return { openPostCode, address };
};

export default useDaumPostCode;
