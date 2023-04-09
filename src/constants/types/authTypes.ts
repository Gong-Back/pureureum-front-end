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
  certificationNumber: number;
}

export interface SocialLoginInput {
  code: string;
  redirectUrl: string;
}

export interface SocialRegisterInput extends Omit<RegisterInput, 'password'> {
  socialType: SocialPlatformType;
}
