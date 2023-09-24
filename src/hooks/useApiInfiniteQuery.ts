import type { ApiError, ApiResponse } from '@/constants/types';
import {
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

/**
 * useInfiniteQuery 의 Wrapper 함수 useApiInfiniteQuery
 * @param param.queryFn 데이터를 인계 받을 API 함수
 * @param param.queryKey 쿼리 키
 * @param param.initPage 초기 페이지 넘버 (기본 값 0)
 * @param param.getNextPageParam 다음 페이지 넘버를 얻는 함수
 * @param param.options useInfiniteQuery 에 쓰이는 옵션 목록
 */
function useApiInfiniteQuery<
  TData = unknown,
  TQueryFnData = ApiResponse<TData>,
  TError = ApiError,
>({
  queryFn,
  queryKey,
  initPage = 0,
  getNextPageParam,
  options = {},
}: {
  queryFn: QueryFunction<TQueryFnData>;
  queryKey: QueryKey;
  initPage: number;
  // eslint-disable-next-line no-unused-vars
  getNextPageParam: (lastPage: TQueryFnData, allPage: TQueryFnData[]) => number | undefined,
  options: UseInfiniteQueryOptions<TQueryFnData, TError, TData>;
}) {
  return useInfiniteQuery<TQueryFnData, TError, TData>({
    queryFn: ({ pageParam = initPage }) => queryFn(pageParam),
    queryKey,
    getNextPageParam,
    ...options,
  });
}

export default useApiInfiniteQuery;
