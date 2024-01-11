import { ScrollView, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TAILWIND_THEME } from '../../../theme';
import { View } from 'react-native';
import { Fragment, useState } from 'react';
import { UnitDropDownProps } from './types';

const UNITS = ['pieces', 'litres', 'kgs'];

export const UnitDropDown = (props: UnitDropDownProps) => {
  const { onChange, value } = props;
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
  if (TAILWIND_THEME?.theme?.colors?.accent)
    return (
      <View className="relative">
        <View className="border-accent border-2 rounded-md flex items-center justify-center h-12 shadow-md bg-white p-1">
          <TouchableOpacity
            onPress={() => {
              setIsDropDownVisible(!isDropDownVisible);
            }}
          >
            {!isDropDownVisible && !!value ? (
              <Text className="font-poppinsSemiBold text-text">{value}</Text>
            ) : (
              <Ionicons
                name={isDropDownVisible ? 'chevron-up' : 'chevron-down'}
                color={TAILWIND_THEME.theme.colors['accent'] as string}
                size={24}
              />
            )}
          </TouchableOpacity>
        </View>
        {isDropDownVisible && (
          <ScrollView className="absolute top-[110%] left-[-50%] bg-white shadow-md p-2 flex rounded-md w-16">
            {UNITS?.map((unit, index) => (
              <Fragment key={unit}>
                <TouchableOpacity
                  className="mb-1"
                  activeOpacity={1}
                  onPress={() => {
                    console.log('hello');
                    setIsDropDownVisible(false);
                    onChange?.(unit);
                  }}
                >
                  <Text className="text-text font-poppinsSemiBold text-xs">
                    {unit}
                  </Text>
                </TouchableOpacity>
                {index !== UNITS?.length - 1 && (
                  <View className="w-full h-1 border-t-[1px] border-secondary" />
                )}
              </Fragment>
            ))}
          </ScrollView>
        )}
      </View>
    );
};
