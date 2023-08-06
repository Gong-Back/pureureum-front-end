export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'naver' | 'kakao' | 'google';

export type AuthReqParams = {
  'login': {
    email: string;
    password: string;
  }
  'register': {
    name: string;
    email: string;
    phoneNumber: string;
    birthday: number[];
    gender: GenderType;
    password: string;
    socialType?: SocialPlatformType;
  }
  'jwt': {
    accessToken: string;
    refreshToken: string;
  }
}

export type SocialReqParams = {
  'login': {
    verifyCode: string;
    socialType: string;
  }
  'register': {
    name: string;
    email: string;
    phoneNumber: string;
    birthday: number[];
    gender: GenderType;
    socialType: SocialPlatformType;
  }
}

export type VerifyReqParams = {
  'phoneNumber': {
    phoneNumber: string;
  }
  'email': {
    email: string;
  }
}

export type AuthResponses = {
  'login': {
    accessToken: string;
    refreshToken: string;
  }
  'register': {
    accessToken: string;
    refreshToken: string;
  }
}

export type SocialResponses = {
  'tempSearch': {
    email: string;
    socialType: SocialPlatformType;
  }
}

export type VerifyResponses = {
  'phoneNumber': {
    certificationNumber: string;
  }
}