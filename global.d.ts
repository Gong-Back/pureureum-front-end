declare module '*.svg' {
  import React from 'react';

  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare global {
  interface Window {
    kakao: any;
  }
}

export const { kakao } = Window;
