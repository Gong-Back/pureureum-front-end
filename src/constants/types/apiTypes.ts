/**
 * API 호출로 서버에서 받은 데이터와 관련된 interface ApiResponse
 */
export interface ApiResponse<T> {
  /** 백엔드 측에서 전송한 HTTP Status Code */
  code: number;
  /** 백엔드 측에서 전송한 응답 메세지 */
  messages: string[];
  /** 백엔드 측에서 전송한 응답 데이터 */
  data: T;
}

/**
 * API 호출 과정에서 발생한 에러와 관련된 interface ApiError
 */
export interface ApiError {
  /** 백엔드 측에서 전송한 HTTP Status Code */
  code: number;
  /** 백엔드 측에서 전송한 에러 관련 메세지 */
  messages: string[];
  /** 백엔드 측에서 전송한 에러 관련 데이터 */
  data: { [field: string]: string } | null;
}
