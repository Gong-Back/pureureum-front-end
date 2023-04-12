import {
  ApiResponse,
  GenderType,
  SocialPlatformType,
  LoginInput,
  LoginOutput,
  VerifyEmailInput,
  VerifyPhoneNumberInput,
  VerifyPhoneNumberOutput,
  SocialLoginInput,
  SocialRegisterInput,
  RegisterInput,
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
  static async registerAsync(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    birthday: string,
    gender: GenderType,
  ): ApiResponse<undefined> {
    const response = await postAsync<undefined, RegisterInput>(
      '/users/register',
      {
        email,
        password,
        name,
        phoneNumber,
        birthday,
        gender,
      },
    );
    return response;
  }

  /**
   * 기존 유저의 로그인을 처리하는 함수 loginAsync
   * @param email 유저의 이메일
   * @param password 유저의 비밀번호
   * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
   */
  static async loginAsync(
    email: string,
    password: string,
  ): ApiResponse<LoginOutput> {
    const response = await postAsync<LoginOutput, LoginInput>('/users/login', {
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
  static async verifyEmailAsync(email: string): ApiResponse<undefined> {
    const response = await postAsync<undefined, VerifyEmailInput>(
      `/users/validate/email`,
      {
        email,
      },
    );
    return response;
  }

  /**
   * 유효한 핸드폰 번호인지를 체크하고, 인증 번호를 보내기 위한 verifyPhoneNumberAsync
   * @param phoneNumber 인증을 진행할 핸드폰 번호
   * @returns 성공일 경우 200, 실패할 경우 40X 에러 반환
   */
  static async verifyPhoneNumberAsync(
    phoneNumber: string,
  ): ApiResponse<VerifyPhoneNumberOutput> {
    const response = await postAsync<
      VerifyPhoneNumberOutput,
      VerifyPhoneNumberInput
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
  static async confirmPhoneNumberAsync(
    phoneNumber: string,
  ): ApiResponse<undefined> {
    const response = await postAsync<undefined, VerifyPhoneNumberInput>(
      `/sms/complete/certification`,
      {
        phoneNumber,
      },
    );
    return response;
  }

  /**
   * OAuth2 기반 소셜 로그인을 진행하는 함수 socialLoginAsync
   * @param code 소셜 플랫폼에서 인가 받은 인증 코드 code
   * @param redirectUrl 로그인 성공 시 redirect 할 URL
   * @returns 성공 시 200, 실패 시 40X 에러 반환
   */
  static async socialLoginAsync(
    code: string,
    redirectUrl: string,
  ): ApiResponse<undefined> {
    const response = await postAsync<undefined, SocialLoginInput>(
      `/oauth/login`,
      {
        code,
        redirectUrl,
      },
    );
    return response;
  }

  /**
   *
   * OAuth2 기반 신규 유저의 회원가입을 처리하는 함수 socialRegisterAsync
   * @param email 유저의 이메일
   * @param name 유저의 실명
   * @param phoneNumber 유저의 전화번호
   * @param birthday 유저의 생일
   * @param gender 유저의 성별 (MALE, FEMALE)
   * @param socialType 소셜 플랫폼 타입 (NAVER, KAKAO, GOOGLE)
   * @returns 성공 시 true, 실패 시 false 반환
   */
  static async socialRegisterAsync(
    email: string,
    name: string,
    phoneNumber: string,
    birthday: string,
    gender: GenderType,
    socialType: SocialPlatformType,
  ): ApiResponse<undefined> {
    const response = await postAsync<undefined, SocialRegisterInput>(
      `/oauth/register`,
      {
        email,
        name,
        phoneNumber,
        birthday,
        gender,
        socialType,
      },
    );
    return response;
  }
}
