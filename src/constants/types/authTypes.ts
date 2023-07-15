import type { ParsedUrlQuery } from 'querystring';

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
    birthday: string;
    gender: GenderType;
    password: string;
    socialType?: SocialPlatformType;
  }
  'oauth2': {
    code: string;
    redirectUrl: string;
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
}

export type VerifyResponses = {
  'phoneNumber': {
    certificationNumber: string;
  }
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  token: string;
}

export interface RegisterInput extends LoginInput {
  name: string;
  phoneNumber: string;
  birthday: string;
  gender: GenderType;
  socialType?: SocialPlatformType;
}

export interface RegisterFormInput extends RegisterInput {
  confirmPassword: string;
  typedCertificationNumber: string;
}

export interface RegisterVerifyInput {
  certificationNumber: string | undefined;
  isCheckUserEmail: boolean;
  isCheckPhoneNumber: boolean;
}

export type VerifyEmailInput = Pick<RegisterInput, 'email'>;

export type VerifyPhoneNumberInput = Pick<RegisterInput, 'phoneNumber'>;

export interface VerifyPhoneNumberOutput {
  certificationNumber: string;
}

export interface SocialLoginInput {
  code: string;
  redirectUrl: string;
}

export interface SocialRegisterInput extends Omit<RegisterInput, 'password'> {
  socialType: SocialPlatformType;
}

export interface SocialRegisterParam extends ParsedUrlQuery {
  email: string;
  socialType: Lowercase<SocialPlatformType>;
}
