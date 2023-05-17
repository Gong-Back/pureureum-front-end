import type { ParsedUrlQuery } from 'querystring';

export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'naver' | 'kakao' | 'google';

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginOutput {
  accessToken: string;
  refreshToken: string;
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
