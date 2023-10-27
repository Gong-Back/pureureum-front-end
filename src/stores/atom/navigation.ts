import { atom } from 'jotai';

export const dashboardNavbarVisibleAtom = atom<boolean>(true);

export const handleDashboardNavbarVisible = atom(
  (get) => get(dashboardNavbarVisibleAtom),
  (get, set, newModalState: boolean) => {
    set(dashboardNavbarVisibleAtom, newModalState);
  },
);
