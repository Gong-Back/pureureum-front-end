export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'naver' | 'kakao' | 'google';

export type AuthReqParams = {
  login: {
    verifyCode: string;
    socialType: string;
  };
  register: {
    email: string,
    name: string;
    birthday: [number, number, number];
    gender: GenderType;
    socialType: SocialPlatformType;
  };
  jwt: {
    accessToken: string;
  };
};

export type AuthResponses = {
  login: {
    accessToken: string;
  };
  register: {
    accessToken: string;
  };
  tempSearch: {
    email: string;
    socialType: SocialPlatformType;
  };
};

export type AuthFormType = {
  register: {
    name: string;
    birthday: [number, number, number];
    gender: GenderType;
  };
};
