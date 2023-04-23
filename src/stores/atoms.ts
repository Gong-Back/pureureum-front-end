import { atom } from 'jotai';
import type { ReactNode } from 'react';

export interface ModalStateType {
  isOpen: boolean;
  content: ReactNode[];
}

export const modalStateAtom = atom<ModalStateType>({
  isOpen: false,
  content: [],
});
