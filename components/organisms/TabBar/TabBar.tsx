import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';

export const TabBar = (props: BottomTabBarProps) => {
  const { descriptors, navigation, state, insets } = props;
  return (
    <View className="flex-row mx-2 p-2 items-center shadow-md bg-white rounded-md border-accent border-2">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const tabBarIcon = options?.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            key={route?.key}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 flex-col items-center gap-1"
          >
            {!!tabBarIcon &&
              tabBarIcon({
                focused: isFocused,
                size: 24,
                color: '#735bec',
              })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
