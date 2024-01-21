import clsx from 'clsx';
import { ScrollView, Text, View } from 'react-native';
import { useGroceryAtomValue } from '../../../globalState/groceryAtom';
import { GroceryItem } from '../../molecules/GroceryItem/GroceryItem';
import { Fragment } from 'react';

export const GroceriesTemplate = () => {
  const groceryAtom = useGroceryAtomValue();

  return (
    <View className={clsx('flex-1 bg-white px-2 flex')}>
      {/* Grocery list */}

      <ScrollView
        className={clsx('pb-2')}
        contentContainerStyle={{
          display: 'flex',
          height: '100%',
        }}
      >
        {/* Your Groceries title */}
        <View className="mb-4">
          <Text className={clsx('font-poppinsBold text-4xl pt-4 text-accent')}>
            Your Groceries
          </Text>
        </View>

        <View className="mb-4">
          {groceryAtom?.map((grocery, index) => (
            <Fragment>
              <GroceryItem grocery={grocery} key={grocery?.id} />
              {index !== groceryAtom?.length - 1 && <View className={'h-3'} />}
            </Fragment>
          ))}
        </View>

        {groceryAtom?.length > 0 ? (
          <View className={clsx('flex flex-row items-center justify-center')}>
            <View className={clsx('w-[40%] h-[1px] bg-accent rounded-full')} />
            <View className={clsx('w-[20%]')}>
              <Text
                className={clsx('font-poppinsBold text-accent text-center')}
              >
                That is all
              </Text>
            </View>
            <View className={clsx('w-[40%] h-[1px] bg-accent rounded-full')} />
          </View>
        ) : (
          <View className="flex-grow flex justify-center">
            <Text className={clsx('font-poppinsBold text-accent text-center')}>
              Add groceries 😊😊😊
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
