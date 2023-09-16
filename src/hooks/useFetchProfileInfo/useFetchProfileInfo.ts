import { UserRepository } from '@/apis/user';
import { type UserResponses } from '@/constants/types';
import {
  QueryOptions,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import PROFILE_KEYS from './queryKey';

export function useProfileInfo(
  option: QueryOptions = {},
): UseQueryResult<UserResponses['info'], unknown> {
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
