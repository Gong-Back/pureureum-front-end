import { postAsync } from '@/apis/API';
import { AuthTokenType } from '@/constants/types';

export class JwtRepository {
  /**
   * 리프레시 토큰을 통해 새로운 엑세스 토큰을 재발급 받는 함수 verifyRefreshTokenAsync
   * @param refreshToken 유저가 소유한 refreshToken
   * @returns 갱신 성공 시 토큰, 갱신 실패 시 430 에러 리턴
   */
  static async verifyRefreshTokenAsync(refreshToken: string) {
    const response = await postAsync<AuthTokenType, undefined>(
      '/users/reissue-token',
      undefined,
      {
        headers: { authorization: `Bearer ${refreshToken}` },
      },
    );
    return response;
  }
}
