import { ApiResponse, GenderType, DuplicateOptionType, LoginAsyncInput, LoginAsyncOutput } from '@/constants/types';
import { postAsync } from './API';

/**
 * 신규 유저의 회원가입을 처리하는 함수 registerAsync
 * @param email 유저의 이메일
 * @param password 유저의 비밀번호
 * @param name 유저의 실명
 * @param nickname 유저의 닉네임
 * @param age 유저의 나이
 * @param gender 유저의 성별 (m,f)
 * @returns 가입 성공 시 201, 실패 시 에러 반환 (1001, 500 등)
 */
export async function registerAsync(
    email: string,
    password: string,
    name: string,
    nickname: string,
    age: number,
    gender: GenderType
): ApiResponse<undefined> {
    const response = await postAsync<undefined, any>('/auth/sign-up', undefined, {
        params: { email, password, name, nickname, age, gender },
    });
    return response;
}

/**
 * 기존 유저의 로그인을 처리하는 함수 loginAsync
 * @param email 유저의 이메일
 * @param password 유저의 비밀번호
 * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
 */
export async function loginAsync(email: string, password: string): ApiResponse<LoginAsyncOutput> {
    const response = await postAsync<LoginAsyncOutput, LoginAsyncInput>('/auth/sign-in', { email, password });
    return response;
}

/**
 * 이메일 혹은 닉네임 중복을 확인할 함수 checkDuplicateAsync
 * @param option 닉네임, 이메일
 * @param value 중복 여부를 확인할 데이터
 * @returns 중복일 경우 409 에러 반환, 미중복일 경우 200
 */
export async function checkDuplicateAsync(option: DuplicateOptionType, value: string): ApiResponse<undefined> {
    // TO-DO : request data 에 any type 강제 해결 필요
    const response = await postAsync<undefined, any>(`/auth/check-${option}`, {
        [option]: value,
    });
    return response;
}
