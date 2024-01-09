import { Slot, Stack } from 'expo-router';
import { TAILWIND_THEME } from '../theme';
import { Text, View } from 'react-native';

export default function PageLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: '#fff',
          position: 'relative',
        },
      }}
    />
  );
}
