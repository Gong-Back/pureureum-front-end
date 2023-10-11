import { API_URL } from '@/constants/apis';
import {
  ApiResponse,
  AuthResponses,
  SocialReqParams,
  SocialResponses,
} from '@/constants/types';

import { postAsync } from './API';

export class SocialRepository {
  /**
   * OAuth2 기반 소셜 로그인을 진행하는 함수 socialLoginAsync
   * @param code 소셜 플랫폼에서 인가 받은 인증 코드 code
   * @param redirectUrl 로그인 성공 시 redirect 할 URL
   * @param socialType 로그인을 진행한 소셜 플랫폼 정보
   * @returns 성공 시 200, 실패 시 40X 에러 반환
   */
  static async loginAsync({
    verifyCode,
    socialType,
  }: SocialReqParams['login']) {
    const response = await fetch(`${API_URL}/oauth/login/${socialType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        code: verifyCode,
        redirectUrl: `http://localhost:3000/oauth2/redirect/${socialType}`,
      }),
    });
    return (await response.json()) as ApiResponse<AuthResponses['login']>;
  }

  /**
   *
   * OAuth2 기반 신규 유저의 회원가입을 처리하는 함수 registerAsync
   * @param email 유저의 이메일
   * @param name 유저의 실명
   * @param phoneNumber 유저의 전화번호
   * @param birthday 유저의 생일
   * @param gender 유저의 성별 (MALE, FEMALE)
   * @param socialType 소셜 플랫폼 타입 (NAVER, KAKAO, GOOGLE)
   * @returns 성공 시 true, 실패 시 false 반환
   */
  static async registerAsync({
    email,
    name,
    phoneNumber,
    birthday,
    gender,
    socialType,
  }: Required<SocialReqParams['register']>) {
    const response = await postAsync<
      AuthResponses['register'],
      SocialReqParams['register']
    >(`/oauth/register`, {
      email,
      name,
      phoneNumber,
      birthday,
      gender,
      socialType,
    });
    return response;
  }

  /**
   * OAuth2 회원가입 진행을 위한 정보를 서버로부터 받는 함수 socialSearchUserAsync
   * @param email 회원가입을 진행할 유저의 email
   * @returns 조회 성공 시 SocialRegisterInput 객체 return, 실패 시 410.
   */
  static async tempSearchUserAsync(
    email: string,
  ): Promise<ApiResponse<SocialResponses['tempSearch']>> {
    const response = await fetch(`${API_URL}/oauth/temp/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return (await response.json()) as ApiResponse<
      SocialResponses['tempSearch']
    >;
  }
}
