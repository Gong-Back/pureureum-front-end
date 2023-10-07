const {
  NEXT_PUBLIC_KAKAO_CLIENT_ID: KAKAO_CLIENT_ID,
  NEXT_PUBLIC_KAKAO_REDIRECT_URL: KAKAO_REDIRECT_URL,
  NEXT_PUBLIC_NAVER_CLIENT_ID: NAVER_CLIENT_ID,
  NEXT_PUBLIC_NAVER_REDIRECT_URL: NAVER_REDIRECT_URL,
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID,
  NEXT_PUBLIC_GOOGLE_REDIRECT_URL: GOOGLE_REDIRECT_URL,
} = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pureureum.s3.ap-northeast-2.amazonaws.com',
        pathname: '/profile/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/oauth2/kakao',
        destination: `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`,
        permanent: false,
      },
      {
        source: '/oauth2/naver',
        destination: `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URL}&response_type=code&state=state`,
        permanent: false,
      },
      {
        source: '/oauth2/google',
        destination: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&response_type=code`,
        permanent: false,
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
