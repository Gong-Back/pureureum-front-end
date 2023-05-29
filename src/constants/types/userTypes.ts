import { GenderType } from './authTypes';

export interface PersonalInfoType {
  email: string;
  phoneNumber: string;
  name: string;
  nickname: string;
  gender: GenderType;
  birthday: string;
  profileUrl: string;
}

export interface UpdatePersonalInfoType {
  password?: string;
  phoneNumber?: string;
  nickname?: string;
}

export interface UpdateProfileImageType {
  profileImageFile: File | undefined;
}

export type UpdateUserInfoParamType = {
  type: 'password' | 'phoneNumber' | 'nickname';
  updatedValue: string;
};
