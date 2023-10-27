declare module '*.svg' {
  import React from 'react';

  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare global {
  interface Window {
    daum: any;
  }
}

export const { daum } = Window;
