import axios, {
  type AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import { AuthRepository } from '@/apis/auth';
import { API_URL, ERROR_CODE } from '@/constants/apis';
import { ApiError, type ApiResponse } from '@/constants/types';

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
  async (error: AxiosError<ApiError>) => {
    // 토큰 만료 에러인지를 확인하고, 만약 맞다면 저장된 리프레시 토큰을 재전송
    if (
      error.response &&
      error.response.data.code === ERROR_CODE.JWT_INVALID_EXCEPTION
    ) {
      try {
        // 똑같은 요청을 재전송 하여 refresh token 을 재인증하는 과정도 거친다
        const retryResponse = await axios.request({
          ...error.config,
        });

        const {
          data: { accessToken: newAccessToken },
        } = retryResponse;

        // 재요청의 응답에 refresh token 이 없을 경우, 로그아웃을 진행해야 한다.
        if (!newAccessToken)
          throw new Error('리프레시 토큰이 만료되어 로그아웃이 필요합니다.');

        await AuthRepository.setJwtCookieAsync(newAccessToken);
        return retryResponse;
      } catch (err) {
        await AuthRepository.removeJwtCookieAsync();
        if (typeof window !== 'undefined') window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  },
);

/**
 * Request Header 에 requireToken 속성이 true 인 경우만 access token 동봉
 * 모든 요청에 토큰을 담아 보내기에는 next 서버에 요청해야 하는 과정이 필요하여 개선.
 */
API.interceptors.request.use(async (req: AxiosRequestConfig) => {
  const isRequireToken = req.headers?.requireToken;

  if (req.headers && isRequireToken) {
    const accessToken = await AuthRepository.getJwtCookieAsync();
    if (accessToken) req.headers.authorization = `Bearer ${accessToken}`;
  }

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
    // 요청을 전송하여 서버에서 응답을 받았으나, 에러가 발생한 경우 body를 참고하여 데이터 추가.
    if (err.response) {
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
    code: -1,
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
