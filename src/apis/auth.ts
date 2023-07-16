import {
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
    const response = await postAsync<AuthResponses['register'], AuthReqParams['register']>('/users/register', {
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
  static async loginAsync({email, password}: AuthReqParams['login']) {
    const response = await postAsync<AuthResponses['login'], AuthReqParams['login']>('/users/login', {
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
}
