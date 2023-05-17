import { atom } from 'jotai';
import type { ModalStateType } from '@/stores/atoms';
import { modalStateAtom, authTokenAtom } from '@/stores/atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);

export const accessTokenAtom = atom(
  (get) => {
    const curTokenAtom = get(authTokenAtom);
    return curTokenAtom.accessToken;
  },
  (get, set, newAccessToken: string | null) => {
    const prevTokenData = get(authTokenAtom);
    set(authTokenAtom, { ...prevTokenData, accessToken: newAccessToken });
  },
);

export const refreshTokenAtom = atom(
  (get) => {
    const curTokenAtom = get(authTokenAtom);
    return curTokenAtom.refreshToken;
  },
  (get, set, newRefreshToken: string | null) => {
    const prevTokenData = get(authTokenAtom);
    set(authTokenAtom, { ...prevTokenData, accessToken: newRefreshToken });
  },
);
