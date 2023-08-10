import {
  PersonalInfoType,
  UpdatePersonalInfoType,
  UpdateUserInfoParamType,
  UserReqParams,
} from '@/constants/types';
import { getAsync, postAsync } from './API';

export class UserRepository {
  /**
   * 유저의 회원 정보를 가져오는 함수 getUserInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserInfoAsync() {
    const response = await getAsync<PersonalInfoType>('/users/me');
    if (response.isSuccess) return response.result.data;
    throw Error('failed to load data');
  }

  /**
   * 유저의 회원 정보를 업데이트 하는 함수 updateUserInfoAsync
   * @param type 변경하고자 하는 타입 (비밀번호, 핸드폰 번호, 닉네임 중 1개)
   * @param updatedValue 변경하고자 하는 정보
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateUserInfoAsync({
    type,
    updatedValue,
  }: UserReqParams['updateInfo']) {
    await postAsync<undefined, UpdatePersonalInfoType>('/users/update/info', {
      [type]: updatedValue,
    });
  }

  /**
   * 유저의 프로필 이미지를 업데이트 하는 함수 updateProfileImageAsync
   * @param profileImageFile 새롭게 업데이트 하려는 프로필 이미지 (undefined인 경우, 기본 이미지로 롤백)
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateProfileImageAsync(profileImageFile: File | undefined) {
    await postAsync<undefined, UpdateProfileImageType>(
      '/users/update/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  }
}
