import {
  ApiResponse,
  GenderType,
  VerifyPhoneNumType,
  LoginAsyncInput,
  LoginAsyncOutput,
} from '@/constants/types';
import { postAsync } from './API';

/**
 * 신규 유저의 회원가입을 처리하는 함수 registerAsync
 * @param email 유저의 이메일
 * @param password 유저의 비밀번호
 * @param name 유저의 실명
 * @param phoneNumber 유저의 전화번호
 * @param birthday 유저의 생일
 * @param gender 유저의 성별 (MALE, FEMALE)
 * @returns 가입 성공 시 201, 실패 시 에러 반환 (1001, 500 등)
 */
export async function registerAsync(
  email: string,
  password: string,
  name: string,
  phoneNumber: string,
  birthday: number,
  gender: GenderType,
): ApiResponse<undefined> {
  const response = await postAsync<undefined, any>(
    '/users/register',
    undefined,
    {
      params: { email, password, name, phoneNumber, birthday, gender },
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
export async function loginAsync(
  email: string,
  password: string,
): ApiResponse<LoginAsyncOutput> {
  const response = await postAsync<LoginAsyncOutput, LoginAsyncInput>(
    '/users/login',
    { email, password },
  );
  return response;
}

/**
 * 이메일 중복을 확인할 함수 verifyEmailAsync
 * @param email 중복을 체크할 이메일
 * @returns 중복일 경우 409 에러 반환, 미중복일 경우 200
 */
export async function verifyEmailAsync(email: string): ApiResponse<undefined> {
  // TO-DO : request data 에 any type 강제 해결 필요
  const response = await postAsync<undefined, any>(`/users/validate/email`, {
    email,
  });
  return response;
}

/**
 * 유효한 핸드폰 번호인지를 체크하고, 인증 번호를 보내기 위한 verifyPhoneNumberAsync
 * @param option 닉네임, 이메일
 * @param value 중복 여부를 확인할 데이터
 * @returns 중복일 경우 409 에러 반환, 미중복일 경우 200
 */
export async function verifyPhoneNumberAsync(
  phoneNumber: string,
): ApiResponse<VerifyPhoneNumType> {
  // TO-DO : request data 에 any type 강제 해결 필요
  const response = await postAsync<VerifyPhoneNumType, any>(
    `/sms/send/certification`,
    {
      phoneNumber,
    },
  );
  return response;
}
