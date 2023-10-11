import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <link
        rel="preload"
        href="/fonts/SUIT-ExtraBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SUIT-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SUIT-SemiBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SUIT-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SUIT-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/SUIT-Light.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
    </Head>
    <body>
      <div id="modal" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
