import { useFonts } from 'expo-font';
import { Redirect, SplashScreen } from 'expo-router';
import { useCallback } from 'react';
import { View } from 'react-native';

export default function Page() {
  const [fontsLoaded, fontError] = useFonts({
    poppinsLight: require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    poppinsSemiBold: require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    poppinsBold: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    // TODO: Return a splash screen
    return null;
  }
  return <Redirect href={'/(tabs)/home'} />;
}
