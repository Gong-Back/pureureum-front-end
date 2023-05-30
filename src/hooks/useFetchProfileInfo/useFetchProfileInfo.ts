import {
  useQueryClient,
  useQuery,
  QueryOptions,
  useMutation,
  UseQueryResult,
} from '@tanstack/react-query';

import { UserRepository } from '@/apis/user';
import { ApiError, ApiResponse, PersonalInfoType } from '@/constants/types';

import PROFILE_KEYS from './queryKey';

export function useProfileInfo(
  option: QueryOptions = {},
): UseQueryResult<PersonalInfoType, unknown> {
  return useQuery(PROFILE_KEYS.base, UserRepository.getUserInfoAsync, {
    ...option,
  });
}

export function useUpdateProfileImage() {
  const queryClient = useQueryClient();
  return useMutation(UserRepository.updateProfileImageAsync, {
    onSuccess: () => {
      queryClient.invalidateQueries(PROFILE_KEYS.base);
    },
  });
}

export function useUpdateUserInfo() {
  const queryClient = useQueryClient();
  return useMutation(UserRepository.updateUserInfoAsync, {
    onSuccess: () => {
      queryClient.invalidateQueries(PROFILE_KEYS.base);
    },
  });
}
