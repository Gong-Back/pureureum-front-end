import {
  ApiResponse,
  PersonalInfoType,
  UpdatePersonalInfoType,
  UpdateUserInfoParamType,
} from '@/constants/types';
import { getAsync, postAsync } from './API';

export class UserRepository {
  /**
   * 유저의 회원 정보를 가져오는 함수 getUserInfoAsync
   * @returns 가입 성공 시 200, 실패 시 에러 반환 (400 등)
   */
  static async getUserInfoAsync(): Promise<PersonalInfoType> {
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
  }: UpdateUserInfoParamType): ApiResponse<undefined> {
    const response = await postAsync<undefined, UpdatePersonalInfoType>(
      '/users/update/info',
      {
        [type]: updatedValue,
      },
    );
    return response;
  }

  /**
   * 유저의 프로필 이미지를 업데이트 하는 함수 updateProfileImageAsync
   * @param profileImageFile 새롭게 업데이트 하려는 프로필 이미지 (undefined인 경우, 기본 이미지로 롤백)
   * @returns 성공 시 200 반환, 실패 시 40X 에러 반환
   */
  static async updateProfileImageAsync(
    profileImageFile: File | undefined,
  ): ApiResponse<undefined> {
    const formData = new FormData();
    // 업로드 하려는 이미지가 존재하는 경우에만 Blob로 변환하여 추가
    if (profileImageFile) {
      formData.append(
        'profile',
        new Blob(
          [
            JSON.stringify({
              profileImageFile,
            }),
          ],
          {
            type: 'image/png',
          },
        ),
      );
    }
    const response = await postAsync<undefined, FormData>(
      '/users/update/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  }
}
