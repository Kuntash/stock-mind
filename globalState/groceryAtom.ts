import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

export type Grocery = {
  id: string;
  name: string;
  expiryDate: Date;
  quantity: number;
  unit: 'pieces' | 'litres' | 'kgs';
};

const groceryAtom = atom<Grocery[]>([]);

export const useGroceryAtom = () => useAtom(groceryAtom);

export const useGroceryAtomValue = () => useAtomValue(groceryAtom);
export const useSetGroceryAtom = () => useSetAtom(groceryAtom);
