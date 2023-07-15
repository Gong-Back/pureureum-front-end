import {
  PersonalInfoType,
  UpdatePersonalInfoType,
  UpdateProfileImageType,
} from '@/constants/types';
import { getAsync, postAsync } from './API';

export class UserRepository {
  /**
   * 유저의 회원 정보를 가져오는 함수 getUserInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserInfoAsync() {
    const response = await getAsync<PersonalInfoType>('/users/me');
    return response;
  }

  /**
   * 유저의 회원 정보를 업데이트 하는 함수 updateUserInfoAsync
   * @param password 변경하고자 하는 유저의 비밀번호
   * @param phoneNumber 변경하고자 하는 유저의 핸드폰 번호
   * @param nickname 변경하고자 하는 유저의 닉네임
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateUserInfoAsync(
    password: string | undefined,
    phoneNumber: string | undefined,
    nickname: string | undefined,
  ) {
    await postAsync<undefined, UpdatePersonalInfoType>(
      '/users/update/info',
      {
        password,
        phoneNumber,
        nickname,
      },
    );
  }

  /**
   * 유저의 프로필 이미지를 업데이트 하는 함수 updateProfileImageAsync
   * @param profileImageFile 새롭게 업데이트 하려는 프로필 이미지 (undefined인 경우, 기존 이미지로 수정하겠다는 의미)
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateProfileImageAsync(
    profileImageFile: File | undefined,
  ) {
    await postAsync<undefined, UpdateProfileImageType>(
      '/users/update/profile',
      { profileImageFile },
      {
        headers: {
          'Content-Type': 'image/png',
        },
      },
    );
  }
}
