import clsx from 'clsx';
import { Text, View } from 'react-native';
import { AddGroceryForm } from '../../organisms/AddGroceryForm';

export const AddGroceryTemplate = () => {
  return (
    <View className={clsx('flex-1 bg-white px-2 flex')}>
      {/* Add Grocery title */}
      <View className="mb-4">
        <Text className={clsx('font-poppinsBold text-4xl pt-4 text-accent')}>
          Add Grocery
        </Text>
      </View>
      {/* Grocery form */}
      <AddGroceryForm />
    </View>
  );
};
