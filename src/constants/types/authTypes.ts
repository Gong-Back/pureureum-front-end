export interface LoginInputsType {
    email: string;
    password: string;
}

export type GenderType = 'm' | 'f';

export type DuplicateOptionType = 'email' | 'nickname';

export interface RegisterInputsType extends LoginInputsType {
    passwordCheck: string;
    name: string;
    gender: GenderType;
    age: number;
    profileImg: string;
    nickname: string;
}

export interface LoginAsyncInput {
    email: string;
    password: string;
}

export interface LoginAsyncOutput {
    token: string;
}

export type InputNameType = keyof RegisterInputsType;
