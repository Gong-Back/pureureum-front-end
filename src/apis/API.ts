import axios, {
  type AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { API_URL, ERROR_CODE } from '@/constants/apis';
import { ApiError, type ApiResponse } from '@/constants/types';

import { AuthRepository } from './auth';

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
  withCredentials: true,
});

API.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (error: AxiosError) => {
    // 토큰 만료 에러인지를 확인하고, 만약 맞다면 저장된 리프레시 토큰을 재전송
    if (
      error.response &&
      error.response.status === ERROR_CODE.JWT_INVALID_EXCEPTION
    ) {
      try {
        const {
          data: { accessToken: newAccessToken },
        } = await AuthRepository.refreshJwtCookieAsync();
        await AuthRepository.setJwtCookieAsync({
          accessToken: newAccessToken,
        });
        // 새롭게 갱신 받은 엑세스 토큰을 헤더에 삽입한 후 재요청 진행
        return axios.request({
          ...error.config,
          headers: {
            ...error.config?.headers,
            authorization: `Bearer ${newAccessToken}`,
          },
        });
      } catch (err) {
        // 리프레시 토큰도 만료되었다면, 로그아웃을 진행시킴.
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

API.interceptors.request.use(async (req: AxiosRequestConfig) => {
  const { accessToken } = await AuthRepository.getJwtCookieAsync();
  if (accessToken && req.headers)
    req.headers.authorization = `Bearer ${accessToken}`;
  return req;
});

/**
 * API 통신 과정에서 발생한 에러의 타입을 명시하기 위한 함수 handleApiError
 * @param err API 통신 과정에서 발생한 에러 데이터
 * @returns 클라이언트에게 인계할 에러 객체 (ApiError)
 */
function handleApiError(err: unknown): ApiError {
  // isAxiosError 조건이 true 라면, err는 AxiosError로 타입이 좁혀진다.
  if (axios.isAxiosError<ApiError, undefined>(err)) {
    // 요청을 전송하여 서버에서 응답을 받았으나, 에러가 발생한 경우
    if (err.response) {
      // 서버의 Error Response 의 body를 참고하여 데이터 추가.
      return err.response.data;
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

// 서버에서 받은 에러 정보를 Wrapping 한 커스텀 에러 객체 ApiErrorInstance
export class ApiErrorInstance extends Error {
  constructor(error: ApiError) {
    super();
    this.name = 'ApiError';
    this.messages = error.messages;
    this.code = error.code;
    this.data = error.data;
  }

  messages: ApiError['messages'];

  code: ApiError['code'];

  data: ApiError['data'];
}

/**
 * GET 요청을 처리하는 유틸 API 함수 getAsync
 * @param T 요청 결과로 받을 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (APIResponse)
 */
export async function getAsync<T>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await API.get<T, AxiosResponse<ApiResponse<T>>>(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    throw new ApiErrorInstance(handleApiError(error));
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
) {
  try {
    const response = await API.post<T, AxiosResponse<ApiResponse<T>, D>, D>(
      url,
      data,
      {
        ...config,
      },
    );
    return response.data;
  } catch (error) {
    throw new ApiErrorInstance(handleApiError(error));
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
) {
  try {
    const response = await API.patch<T, AxiosResponse<ApiResponse<T>, D>, D>(
      url,
      data,
      {
        ...config,
      },
    );
    return response.data;
  } catch (error) {
    throw new ApiErrorInstance(handleApiError(error));
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
export async function deleteAsync<T>(url: string, config?: AxiosRequestConfig) {
  try {
    const response = await API.delete<T>(url, {
      ...config,
    });
    return response.data;
  } catch (error) {
    throw new ApiErrorInstance(handleApiError(error));
  }
}
