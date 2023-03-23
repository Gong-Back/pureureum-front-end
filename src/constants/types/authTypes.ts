export interface LoginInputsType {
  email: string;
  password: string;
}

export interface RegisterInputsType extends LoginInputsType {
  name: string;
  phoneNumber: string;
  birthday: number;
  gender: GenderType;
}

export type GenderType = 'MALE' | 'FEMALE';

export interface VerifyPhoneNumType {
  certificationNumber: number;
}

export interface LoginAsyncInput {
  email: string;
  password: string;
}

export interface LoginAsyncOutput {
  token: string;
}

export type InputNameType = keyof RegisterInputsType;
