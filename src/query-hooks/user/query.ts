import { useQuery } from '@tanstack/react-query';

import { UserRepository } from '@/apis/user';
import QUERY_KEY from '@/constants/apis/queryKey';
import type { ApiError, ApiResponse, UserResponses } from '@/constants/types';

export const useGetUserProfile = () => useQuery<
    ApiResponse<UserResponses['info']>,
    UserResponses['info'],
    ApiError
  >({
    queryFn: UserRepository.getUserInfoAsync,
    queryKey: QUERY_KEY.USER.base,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
