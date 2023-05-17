import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import type { ReactNode } from 'react';

import { AuthTokenType } from '@/constants/types';

export interface ModalStateType {
  /** 현재 모달이 열렸는지, 닫혔는지를 나타내는 상태 */
  isOpen: boolean;
  /** 현재 열려야 하는 모달을 Queue 형태로 저장한 자료구조 */
  content: ReactNode[];
}

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: [],
});

export const authTokenAtom = atomWithStorage<AuthTokenType>('jwt', {
  accessToken: null,
  refreshToken: null,
});
