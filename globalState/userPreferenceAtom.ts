import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export type UserPreference = {
  notifyBefore: number;
  shouldDeleteAfterExpiring: boolean;
};

const userPreferenceAtom = atom<UserPreference>({
  notifyBefore: 1,
  shouldDeleteAfterExpiring: false,
});

export const useUserPreferenceAtom = () => useAtom(userPreferenceAtom);

export const useUserPreferenceAtomValue = () =>
  useAtomValue(userPreferenceAtom);
export const useSetUserPreferenceAtom = () => useSetAtom(userPreferenceAtom);
