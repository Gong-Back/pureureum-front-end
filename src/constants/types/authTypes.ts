export type GenderType = 'MALE' | 'FEMALE';
export type SocialPlatformType = 'NAVER' | 'KAKAO' | 'GOOGLE';

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
}

export interface RegisterVerifyInput {
  certificationNumber: number | undefined;
  typedCertificationNumber: number;
  isCheckUserId: boolean;
  isCheckPhoneNumber: boolean;
}

export type VerifyIdInput = Pick<RegisterInput, 'id'>;

export type VerifyPhoneNumberInput = Pick<RegisterInput, 'phoneNumber'>;

export interface VerifyPhoneNumberOutput {
  certificationNumber: number;
}

export interface SocialLoginInput {
  code: string;
  redirectUrl: string;
}

export interface SocialRegisterInput extends Omit<RegisterInput, 'password'> {
  socialType: SocialPlatformType;
}
