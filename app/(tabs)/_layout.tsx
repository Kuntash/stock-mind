import { Tabs } from 'expo-router';
import { TabBar } from '../../components/organisms/TabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="add-grocery"
        options={{
          title: 'Add grocery',
          tabBarIcon: ({ color, focused }) => {
            return (
              <Ionicons
                name={focused ? 'barcode' : 'barcode-outline'}
                color={color}
                size={30}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
