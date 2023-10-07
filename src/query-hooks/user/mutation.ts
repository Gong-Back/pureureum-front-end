import { useMutation, useQueryClient } from '@tanstack/react-query';

import { UserRepository } from '@/apis/user';
import QUERY_KEY from '@/constants/apis/queryKey';
import type { ApiError, UserReqParams } from '@/constants/types';

export function usePatchProfileImage() {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, File | undefined>({
    mutationFn: (uploadedFile) =>
      UserRepository.updateProfileImageAsync(uploadedFile),
    mutationKey: QUERY_KEY.USER.base,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.USER.base);
    },
  });
}

export function usePatchUserProfile() {
  const queryClient = useQueryClient();
  return useMutation<void, ApiError, UserReqParams['updateInfo']>({
    mutationFn: ({ type, updatedValue }) =>
      UserRepository.updateUserInfoAsync({ type, updatedValue }),
    mutationKey: QUERY_KEY.USER.base,
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY.USER.base);
    },
  });
}
