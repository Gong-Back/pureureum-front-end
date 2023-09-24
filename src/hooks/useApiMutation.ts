import {
  MutationFunction,
  MutationKey,
  UseMutationOptions,
  useMutation,
} from '@tanstack/react-query';

import type { ApiError, ApiResponse } from '@/constants/types';

/**
 * useMutation 의 Wrapper 함수 useApiMutation
 * @param param.queryFn 상태 변경을 위해 호출될 API 함수
 * @param param.queryKey 쿼리 키
 * @param param.options useMutation 에 쓰이는 옵션 목록
 */
function useApiMutation<TData = unknown, TError = ApiError>({
  mutationFn,
  mutationKey,
  options = {},
}: {
  mutationFn: MutationFunction<ApiResponse<TData>>;
  mutationKey: MutationKey;
  options: UseMutationOptions<ApiResponse<TData>, TError>;
}) {
  return useMutation({
    mutationFn,
    mutationKey,
    ...options,
  });
}

export default useApiMutation;
