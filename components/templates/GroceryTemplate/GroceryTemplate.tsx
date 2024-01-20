import clsx from 'clsx';
import { Text, View } from 'react-native';
import { GroceryForm } from '../../organisms/GroceryForm';
import { useLocalSearchParams } from 'expo-router';

export const GroceryTemplate = () => {
  const local = useLocalSearchParams();
  console.log(
    '🚀 ~ file: GroceryTemplate.tsx:8 ~ GroceryTemplate ~ local:',
    local
  );
  return (
    <View className={clsx('flex-1 bg-white px-2 flex')}>
      {/* Add Grocery title */}
      <View className="mb-4">
        <Text className={clsx('font-poppinsBold text-4xl pt-4 text-accent')}>
          {local?.groceryId ? 'Edit Grocery' : 'Add Grocery'}
        </Text>
      </View>
      {/* Grocery form */}
      <GroceryForm type={local?.groceryId ? 'edit' : 'add'} />
    </View>
  );
};
