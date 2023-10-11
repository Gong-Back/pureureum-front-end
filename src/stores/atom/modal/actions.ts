import { atom } from 'jotai';

import type { ModalStateType } from './atoms';
import { modalStateAtom } from './atoms';

export const handleModalAtom = atom(
  (get) => get(modalStateAtom),
  (get, set, newModalState: ModalStateType) => {
    set(modalStateAtom, newModalState);
  },
);
