import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQuery,
} from '@tanstack/react-query';

import type { ApiError, ApiResponse } from '@/constants/types';

/**
 * useQuery 의 Wrapper 함수 useApiQuery
 * @param param.queryFn 데이터를 인계 받을 API 함수
 * @param param.queryKey 쿼리 키
 * @param param.options useQuery 에 사용될 옵션들
 */
function useApiQuery<
  TData = unknown,
  TQueryFnData = ApiResponse<TData>,
  TError = ApiError,
>({
  queryFn,
  queryKey,
  options = {},
}: {
  queryFn: QueryFunction<TQueryFnData>;
  queryKey: QueryKey;
  options: UseQueryOptions<TQueryFnData, TError, TData>;
}) {
  return useQuery<TQueryFnData, TError, TData>({
    queryFn,
    queryKey,
    ...options,
  });
}

export default useApiQuery;
