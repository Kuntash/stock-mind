import { useFonts } from 'expo-font';
import { Redirect } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { Grocery, useSetGroceryAtom } from '../globalState/groceryAtom';
import { useEffect } from 'react';
import { GROCERIES } from '../constants/storage';
import { getAllGroceries, getUserPreferences } from '../utils/storage';
import { useSetUserPreferenceAtom } from '../globalState/userPreferenceAtom';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Page() {
  /* storage related */
  const setGroceryAtom = useSetGroceryAtom();
  const setUserPreferenceAtom = useSetUserPreferenceAtom();

  /* Font related */
  const [fontsLoaded, fontError] = useFonts({
    poppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    /* if grocery data exists in async storage, sync them to jotai state */
    getAllGroceries().then((value) => {
      if (value) setGroceryAtom(value);
    });

    /* if user preference data exists in async storage, sync them to jotai state */
    getUserPreferences().then((value) => {
      if (value) setUserPreferenceAtom(value);
    });
  }, []);

  if (!fontsLoaded && !fontError) {
    // TODO: Return a splash screen
    return null;
  }
  return <Redirect href={'/(tabs)/home'} />;
}
