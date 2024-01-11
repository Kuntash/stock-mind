import { MotiText } from 'moti';
import { GroceryItemProps } from './types';
import clsx from 'clsx';
import { format } from 'date-fns';
import { View } from 'react-native';
import { MotiPressable } from 'moti/interactions';
import { useMemo } from 'react';
import { router } from 'expo-router';

export const GroceryItem = (props: GroceryItemProps) => {
  const { grocery } = props;
  const handleOnPress = () => {
    /* redirect to edit grocery page */
  };

  return (
    <MotiPressable
      onPress={handleOnPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet';

            return {
              scale: hovered || pressed ? 0.8 : 1,
            };
          },
        []
      )}
    >
      <View
        className={clsx(
          'border-2 border-accent rounded-md p-2 bg-white shadow-md'
        )}
      >
        <View
          className={clsx('flex flex-row items-start justify-between mb-2')}
        >
          <MotiText className={clsx('font-poppinsBold text-xl text-text')}>
            {grocery?.name}
          </MotiText>

          <MotiText className={clsx('font-poppinsSemiBold text-sm text-text')}>
            {grocery?.quantity}&nbsp;
            <MotiText className={clsx('font-poppinsMedium')}>
              {grocery?.unit}
            </MotiText>
          </MotiText>
        </View>

        <MotiText className={clsx('font-poppinsMedium text-sm text-')}>
          Expires on {format(grocery.expiryDate, 'do MMM, yyyy')}
        </MotiText>
      </View>
    </MotiPressable>
  );
};
