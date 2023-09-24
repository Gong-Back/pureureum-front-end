import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useQueries,
} from '@tanstack/react-query';

import type { ApiError, ApiResponse } from '@/constants/types';

/**
 * useInfiniteQuery 의 Wrapper 함수 useApiInfiniteQuery
 * @param {Object[]} queries 병렬적으로 실행할 쿼리 데이터 목록
 * @param queries[].queryFn 데이터를 인계 받을 API 함수
 * @param queries[].queryKey 쿼리 키
 * @param queries[].option useInfiniteQuery 에 쓰이는 옵션 목록
 */
function useApiQueries<
  TData = unknown,
  TQueryFnData = ApiResponse<TData>,
  TError = ApiError,
>(
  queries: {
    queryFn: QueryFunction<TQueryFnData>;
    queryKey: QueryKey;
    options: UseQueryOptions<TQueryFnData, TError, TData>;
  }[],
) {
  return useQueries({
    queries,
  });
}

export default useApiQueries;
