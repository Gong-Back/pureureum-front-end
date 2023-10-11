import { UserRepository } from '@/apis/user';
import QUERY_KEY from '@/constants/apis/queryKey';
import type { ApiError, ApiResponse, UserResponses } from '@/constants/types';
import useSuspendedQuery from '@/hooks/useSuspensedQuery';

export const useGetUserProfile = () =>
  useSuspendedQuery<
    ApiResponse<UserResponses['info']>,
    ApiError,
    UserResponses['info']
  >({
    queryFn: UserRepository.getUserInfoAsync,
    queryKey: QUERY_KEY.USER.base,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
