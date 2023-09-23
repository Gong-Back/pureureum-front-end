import {
  ApiResponse,
  AuthReqParams,
  AuthResponses,
  VerifyReqParams,
  VerifyResponses,
} from '@/constants/types';

import { postAsync } from './API';

export class AuthRepository {
  /**
   * 신규 유저의 회원가입을 처리하는 함수 registerAsync
   * @param id 유저의 아이디
   * @param password 유저의 비밀번호
   * @param name 유저의 실명
   * @param phoneNumber 유저의 전화번호
   * @param birthday 유저의 생일
   * @param gender 유저의 성별 (MALE, FEMALE)
   * @returns 가입 성공 시 201, 실패 시 에러 반환 (400 등)
   */
  static async registerAsync({
    email,
    password,
    name,
    phoneNumber,
    birthday,
    gender,
  }: AuthReqParams['register']) {
    const response = await postAsync<
      AuthResponses['register'],
      AuthReqParams['register']
    >('/users/register', {
      email,
      password,
      name,
      phoneNumber,
      birthday,
      gender,
    });
    return response;
  }

  /**
   * 기존 유저의 로그인을 처리하는 함수 loginAsync
   * @param email 유저의 이메일
   * @param password 유저의 비밀번호
   * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
   */
  static async loginAsync({ email, password }: AuthReqParams['login']) {
    const response = await postAsync<
      AuthResponses['login'],
      AuthReqParams['login']
    >('/users/login', {
      email,
      password,
    });
    return response;
  }

  /**
   * 이메일 중복을 확인할 함수 verifyEmailAsync
   * @param email 중복을 체크할 이메일
   * @returns 성공일 경우 200, 실패할 경우 40X 에러 반환
   */
  static async verifyEmailAsync(email: string) {
    await postAsync<undefined, VerifyReqParams['email']>(
      `/users/validate/email`,
      {
        email,
      },
    );
  }

  /**
   * 유효한 핸드폰 번호인지를 체크하고, 인증 번호를 보내기 위한 verifyPhoneNumberAsync
   * @param phoneNumber 인증을 진행할 핸드폰 번호
   * @returns 성공일 경우 200, 실패할 경우 40X 에러 반환
   */
  static async verifyPhoneNumberAsync(phoneNumber: string) {
    const response = await postAsync<
      VerifyResponses['phoneNumber'],
      VerifyReqParams['phoneNumber']
    >(`/sms/send/certification`, {
      phoneNumber,
    });
    return response;
  }

  /**
   * 핸드폰 인증이 완료되었음을 백엔드 서버에 알리는 함수 confirmPhoneNumberAsync
   * @param option 닉네임, 이메일
   * @param value 중복 여부를 확인할 데이터
   * @returns 중복일 경우 409 에러 반환, 미중복일 경우 200
   */
  static async confirmPhoneNumberAsync(phoneNumber: string) {
    await postAsync<undefined, VerifyReqParams['phoneNumber']>(
      `/sms/complete/certification`,
      {
        phoneNumber,
      },
    );
  }

  /**
   * Next Api Route를 통해 프론트 서버에 저장되었던 JWT 토큰을 가져오는 함수 getJwtCookieAsync
   */
  static async getJwtCookieAsync() {
    const response = await fetch(`/api/token`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const {
      data: { accessToken },
    } = (await response.json()) as ApiResponse<AuthResponses['login']>;
    return accessToken;
  }

  /**
   * 토큰 갱신이 필요할 시 First-Site Cookie를 세팅하는 함수 setJwtCookieAsync
   * @param param.accessToken 서버로부터 받은 엑세스 토큰
   */
  static async setJwtCookieAsync(accessToken: string) {
    await fetch(`/api/token`, {
      method: 'POST',
      body: JSON.stringify({ accessToken }),
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  /**
   * 서버로부터 받았던 JWT 를 보관한 Cookie를 삭제하는 함수 removeJwtCookieAsync
   */
  static async removeJwtCookieAsync() {
    await fetch(`/api/token`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}
