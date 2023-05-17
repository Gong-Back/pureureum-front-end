import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { ApiError, ApiResponse, ApiResponseData } from '@/constants/types';
import { API_URL, ERROR_CODE } from '@/constants/apis';
import { JwtRepository } from '@/apis/jwt';

/**
 * API 요청에서 범용적으로 사용할 Axios Instance 생성
 * baseURL, responseType 같은 공용 속성을 일괄적으로 적용
 */
const API = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

/**
 * Axios Intercepter 관련 설정
 * request의 경우, localStorage 접근 시 발생하는 에러로 인해 헤더는 상황에 맞춰 토큰을 담는 것으로 조정.
 * response : 토큰 만료 관련 오류 발생 시, 자동으로 리프레시 토큰을 보냄, 이후 리프레시 토큰이 갱신되었다면 기존의 요청 재전송.
 */

API.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError<ApiError, any>) => {
    // 토큰 만료 에러인지를 확인하고, 만약 맞다면 저장된 리프레시 토큰을 재전송
    if (err.response && err.response.data.code === ERROR_CODE.JWT_EXPIRED) {
      const jwtToken = JSON.parse(localStorage.getItem('jwt') || '');
      if (jwtToken) {
        const oldRefreshToken = jwtToken.refreshToken;
        const verifyResponse = await JwtRepository.verifyRefreshTokenAsync(
          oldRefreshToken,
        );
        // 리프레시 토큰을 성공적으로 인계 받았다면, 기존의 요청을 재전송함.
        if (verifyResponse.isSuccess) {
          const { accessToken, refreshToken } = verifyResponse.result.data;
          localStorage.setItem(
            'jwt',
            JSON.stringify({ accessToken, refreshToken }),
          );
          // 새롭게 갱신 받은 엑세스 토큰을 헤더에 삽입한 후 재요청 진행
          return axios.request({
            ...err.config,
            headers: {
              ...err.config?.headers,
              authorization: `${accessToken}`,
            },
          });
        }
        // 리프레시 토큰도 만료되었다면, 로그아웃을 진행시킴.
        localStorage.removeItem('jwt');
        window.location.href = '/login';
      }
    }
    return Promise.reject(err);
  },
);

API.interceptors.request.use(async (req: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem('jwt');
  if (accessToken && req.headers) {
    req.headers.authorization = `Bearer ${JSON.parse(accessToken)}`;
  }
  return req;
});

/**
 * API 통신 과정에서 발생한 에러를 클라이언트에 객체로 인계하는 함수
 * @param err API 통신 과정에서 발생한 에러 데이터
 * @returns 클라이언트에게 인계할 에러 객체 (ApiError)
 */
function handleApiError(err: unknown): ApiError {
  console.log(err);
  // isAxiosError 조건이 true 라면, err는 AxiosError로 타입이 좁혀진다.
  if (axios.isAxiosError(err)) {
    // 요청을 전송하여 서버에서 응답을 받았으나, 에러가 발생한 경우
    if (err.response) {
      // 서버의 Error Response 의 body를 참고하여 데이터 추가.
      const { data: errorResponseData }: AxiosResponse<ApiError, undefined> =
        err.response;
      return {
        code: errorResponseData.code,
        messages: errorResponseData.messages ?? '',
        data: errorResponseData.data ?? null,
      };
    }
    // 요청을 전송하였으나 서버에서 응답을 받지 못한 경우
    if (err.request) {
      return {
        code: -1,
        messages: ['서버와의 통신 과정에서 문제가 발생했습니다.'],
        data: null,
      };
    }
  }
  // axios 오류가 아닌 다른 케이스의 오류일 경우
  return {
    code: 0,
    messages: ['원인 미상의 오류가 발생했습니다.'],
    data: null,
  };
}

/**
 * GET 요청을 처리하는 유틸 API 함수 getAsync
 * @param T 요청 결과로 받을 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (APIResponse)
 */
export async function getAsync<T>(
  url: string,
  config?: AxiosRequestConfig,
): ApiResponse<T> {
  try {
    const response = await API.get<
      T,
      AxiosResponse<ApiResponseData<T>, any>,
      any
    >(url, {
      ...config,
    });
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}

/**
 * POST 요청을 처리하는 유틸 API 함수 postAsync
 * @param T 요청 결과로 받을 데이터의 타입
 * @param D API 요청 시 서버에 전송할 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param data API 요청과 함께 동봉할 data
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (ApiResponse)
 */
export async function postAsync<T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): ApiResponse<T> {
  try {
    const response = await API.post<T, AxiosResponse<ApiResponseData<T>, D>, D>(
      url,
      data,
      {
        ...config,
      },
    );
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}

/**
 * PATCH 요청을 처리하는 유틸 API 함수 patchAsync
 * @param T 요청 결과로 받을 데이터의 타입
 * @param D API 요청 시 서버에 전송할 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param data API 요청과 함께 동봉할 data
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (ApiResponse)
 */
export async function patchAsync<T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): ApiResponse<T> {
  try {
    const response = await API.patch<
      T,
      AxiosResponse<ApiResponseData<T>, D>,
      D
    >(url, data, {
      ...config,
    });
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}

/**
 * PATCH 요청을 처리하는 유틸 Api 함수 deleteAsync
 * @param T 요청 결과로 받을 데이터의 타입
 * @param D Api 요청 시 서버에 전송할 데이터의 타입
 *
 * @param url Api 요청을 보낼 url (string)
 * @param config Api 요청과 관련된 config (AxiosRequestConfig)
 * @returns Api 요청 성공과 실패에 따른 객체 (ApiResponse)
 */
export async function deleteAsync<T>(
  url: string,
  config?: AxiosRequestConfig,
): ApiResponse<T> {
  try {
    const response = await API.patch<
      T,
      AxiosResponse<ApiResponseData<T>, any>,
      any
    >(url, {
      ...config,
    });
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}
