export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'naver' | 'kakao' | 'google';

export type AuthReqParams = {
  login: {
    email: string;
    password: string;
  };
  register: {
    name: string;
    email: string;
    phoneNumber: string;
    birthday: [number, number, number];
    gender: GenderType;
    password: string;
    socialType?: SocialPlatformType;
  };
  jwt: {
    accessToken: string;
  };
};

export type SocialReqParams = {
  login: {
    verifyCode: string;
    socialType: string;
  };
  register: {
    name: string;
    email: string;
    phoneNumber: string;
    birthday: [number, number, number];
    gender: GenderType;
    socialType: SocialPlatformType;
  };
};

export type VerifyReqParams = {
  phoneNumber: {
    phoneNumber: string;
  };
  email: {
    email: string;
  };
};

export type AuthResponses = {
  login: {
    accessToken: string;
  };
  register: {
    accessToken: string;
  };
};

export type SocialResponses = {
  tempSearch: {
    email: string;
    socialType: SocialPlatformType;
  };
};

export type VerifyResponses = {
  phoneNumber: {
    certificationNumber: string;
  };
};

export type AuthFormType = {
  login: {
    email: string;
    password: string;
  };
  register: {
    email: string;
    password: string;
    confirmPassword: string;
    typedCertificationNumber: string;
    name: string;
    phoneNumber: string;
    birthday: [number, number, number];
    gender: GenderType;
    socialType?: SocialPlatformType;
    certificationNumber: string | undefined;
    isCheckUserEmail: boolean;
    isCheckPhoneNumber: boolean;
    step: number;
  };
};
