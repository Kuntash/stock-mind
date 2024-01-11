import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROCERIES, USER_PREFERENCES } from '../constants/storage';
import { Grocery } from '../globalState/groceryAtom';
import { UserPreference } from '../globalState/userPreferenceAtom';

export const getAllGroceries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(GROCERIES);
    const data =
      jsonValue != null ? (JSON.parse(jsonValue) as Grocery[]) : null;
    console.log('🚀 ~ file: storage.ts:9 ~ getAllGroceries ~ data:', data);

    return data;
  } catch (error) {
    console.log('🚀 ~ file: storage.ts:6 ~ getData ~ error:', error);
    return null;
  }
};

export const addGroceryToStorage = async (groceries: Grocery[]) => {
  try {
    await AsyncStorage.setItem(GROCERIES, JSON.stringify(groceries));

    const jsonValue = await AsyncStorage.getItem(GROCERIES);
    const data =
      jsonValue != null ? (JSON.parse(jsonValue) as Grocery[]) : null;
    console.log('🚀 ~ file: storage.ts:21 ~ addGroceryToStorage ~ data:', data);
  } catch (error) {
    console.log('🚀 ~ file: storage.ts:6 ~ getData ~ error:', error);
  }
};

export const getUserPreferences = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_PREFERENCES);
    const data =
      jsonValue != null ? (JSON.parse(jsonValue) as UserPreference) : null;
    console.log('🚀 ~ file: storage.ts:36 ~ getUserPreferences ~ data:', data);

    return data;
  } catch (error) {
    console.log(
      '🚀 ~ file: storage.ts:41 ~ getUserPreferences ~ error:',
      error
    );
    return null;
  }
};
