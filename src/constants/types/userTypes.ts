import { GenderType } from './authTypes';

export type UserReqParams = {
  updateInfo: {
    type: 'password' | 'phoneNumber' | 'nickname'
    updatedValue: string;
  }
  updateProfile: {
    profileImageFile: File | undefined;
  }
}

export type UserResponses = {
  info: {
    email: string;
    phoneNumber: string;
    name: string;
    nickname: string;
    gender: GenderType;
    birthday: string;
    profileUrl: string;
  }
}

export type UserFormType = {
  updatePassword: {
    currentPassword: string;
    changedPassword: string;
    confirmedPassword: string;
  },
  updatePhoneNumber: {
    changedPhoneNumber: string,
    confirmedNumber: string,
    certificationNumber: string,
    isSendingVerifyNum: boolean,
  }
}