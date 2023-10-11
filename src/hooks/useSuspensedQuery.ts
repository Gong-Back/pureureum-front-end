/**
 * useQuery 의 경우 반환된 data 의 타입이 undefined | data 로 추론되는 문제가 발생한다.
 * Suspense 옵션이 켜졌을 경우, 타입 체커에서 data 의 타입을 올바르게 추론하도록 하는 useSuspensedQuery
 *
 * - enabled : true 인 경우에는 state 가 success 라 가정하고, data의 타입을 TData 로 추론한다.
 * - enabled: false 인 경우에는 state 가 idle 이므로, data의 타입을 undefined 로 추론한다.
 * - 그 외 케이스의 경우 status 의 상태와 관계 없이 무조건 요청이 성공했다 가정하고, data의 타입을 TData로 추론한다.
 * @see https://github.com/toss/slash/blob/302e59d214e8792fafedf8291981c408743e7c47/packages/react/react-query/src/hooks/useSuspendedQuery.ts
 */

/* eslint-disable no-redeclare */
import {
  QueryClient,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

import type { ApiError } from '@/constants/types';

// UseQueryOption 에서 suspense, networkMode 를 제외한 나머지를 반환하는 타입 SuspendedUseQueryOptions
export type SuspendedUseQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'suspense' | 'networkMode'
>;

// QueryResult 타입을 기반으로, Suspense 상태에서 정상적으로 data가 추론되도록 하는 타입
export interface SuspendedUseQueryResult<TData>
  extends Omit<
    UseQueryResult,
    'data' | 'status' | 'error' | 'isLoading' | 'isError' | 'isFetching'
  > {
  data: TData;
  status: 'success' | 'idle';
}

// 요청이 성공했을 경우 데이터의 추론은 TData 제네릭 타입으로 추론되어야 한다.
type SuspendedUseQueryResultOnSuccess<TData> =
  SuspendedUseQueryResult<TData> & {
    status: 'success';
    isSuccess: true;
    isIdle: false;
  };

// IDLE 상태일 때는 아직 Query 가 trigger 되지 않았으므로, 데이터의 추론이 undefined 가 되어야 함.
type SuspendedUseQueryResultOnIdle = SuspendedUseQueryResult<undefined> & {
  status: 'idle';
  isSuccess: false;
  isIdle: true;
};

// Override Function 1 : enabled 이 true 인 경우, 요청이 성공했다고 가정하고 비동기 호출의 결과 (TData) 로 data를 추론한다.
export function useSuspendedQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<
    SuspendedUseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled'
  > & {
    enabled?: true;
  },
): SuspendedUseQueryResultOnSuccess<TData>;

// Override Function 2 : enabled 가 false 인 경우, queryState 가 idle 이므로 데이터를 undefined 로 추론한다.
export function useSuspendedQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Omit<
    SuspendedUseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'enabled'
  > & {
    enabled: false;
  },
): SuspendedUseQueryResultOnIdle;

export function useSuspendedQuery<
  TQueryFnData = unknown,
  TError = ApiError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: SuspendedUseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
): SuspendedUseQueryResult<TData> {
  return useQuery({
    suspense: true,
    networkMode: 'always',
    ...options,
  }) as SuspendedUseQueryResult<TData>; // status : 'error' 에 대한 타입 추론은 하지 않도록 한다 (Type Assertion)
}

export default useSuspendedQuery;
