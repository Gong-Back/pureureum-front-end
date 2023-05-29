import {
  useQueryClient,
  useQuery,
  QueryOptions,
  useMutation,
} from '@tanstack/react-query';

import { UserRepository } from '@/apis/user';

import PROFILE_KEYS from './queryKey';

export function useProfileInfo(option: QueryOptions) {
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
