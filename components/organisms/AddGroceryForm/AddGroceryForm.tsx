import clsx from 'clsx';
import { useState } from 'react';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { UnitDropDown } from '../../templates/AddGroceryTemplate/UnitDropDown';
import { TAILWIND_THEME } from '../../../theme';
import { Toast } from '../../atoms/Toast';
import { scheduleNotifications } from '../../../utils/notifications';
import { useDatabaseContext } from '../../../contexts/databaseContext/databaseContext';

export const AddGroceryForm = () => {
  const { db } = useDatabaseContext();
  const [groceryName, setGroceryName] = useState<string | undefined>();
  const [groceryUnit, setGroceryUnit] = useState<string | null>(null);
  const [groceryQuantity, setGroceryQuantity] = useState<string>('0');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [groceryExpiryDate, setGroceryExpiryDate] = useState<Date>(new Date());

  const [hideAddGrocerySuccessToast, setHideAddGrocerySuccessToast] =
    useState<boolean>(false);

  const handleAddGrocery = async () => {
    /* store the data in sqlite db */
    
    /* retreive user preference */

    /* schedule notifications */

    /* toast */

    /* reset the form */
    scheduleNotifications(groceryExpiryDate);
    setHideAddGrocerySuccessToast(false);
    setTimeout(() => {
      setHideAddGrocerySuccessToast(true);
    }, 3000);
  };

  return (
    <View className={clsx('flex-grow flex')}>
      {/* Item name */}
      <View className="mb-4">
        <Text className={clsx('text-text font-poppinsSemiBold mb-2')}>
          What's the grocery name?
        </Text>
        <TextInput
          value={groceryName}
          onChangeText={(text) => {
            setGroceryName(text);
          }}
          selectionColor="735bec"
          className="w-full h-12 shadow-md bg-white border-accent border-2 rounded-md py-0 px-2 text-base font-poppinsSemiBold text-text"
          placeholder="Potato, Eggplant etc"
        />
      </View>
      {/* Item quantity: no. and unit */}
      <View className="flex flex-row justify-between mb-4 z-10">
        <View className="flex-1 mr-4">
          <Text className={clsx('text-text font-poppinsSemiBold mb-2')}>
            Quantity
          </Text>
          <TextInput
            value={groceryQuantity}
            onChangeText={(text) => {
              setGroceryQuantity(text);
            }}
            returnKeyType="done"
            keyboardType="numeric"
            className="w-full h-12 shadow-md bg-white border-accent border-2 rounded-md py-0 px-2 text-base font-poppinsSemiBold text-text"
            placeholder="3"
          />
        </View>
        <View className="min-w-[40px] flex flex-col">
          <View className="flex-0">
            <Text className={clsx('text-text font-poppinsSemiBold mb-2')}>
              Unit
            </Text>
          </View>
          <View className="flex-1">
            <UnitDropDown
              value={groceryUnit}
              onChange={(changedUnit) => {
                setGroceryUnit(changedUnit);
              }}
            />
          </View>
        </View>
      </View>

      {/* Expiry date: */}
      <View className="mb-4">
        <Text className={clsx('text-text font-poppinsSemiBold mb-2')}>
          Select Expiry date
        </Text>
        <TouchableOpacity
          className="border-accent border-2 rounded-md flex items-center justify-center h-12 shadow-md bg-white p-1"
          onPress={() => {
            setIsDatePickerOpen(!isDatePickerOpen);
          }}
        >
          <Text className="font-poppinsSemiBold text-text">
            {format(groceryExpiryDate ?? new Date(), 'do-MMM-yyyy')}
          </Text>
        </TouchableOpacity>
        {isDatePickerOpen && (
          <View>
            <DateTimePicker
              value={groceryExpiryDate}
              display="spinner"
              mode="date"
              onChange={(event, date) => {
                if (date) setGroceryExpiryDate(date);
                // setIsDatePickerOpen(false);
              }}
            />

            <View className=" border-accent border-2 rounded-md flex items-center justify-center h-12 shadow-md p-1">
              <TouchableOpacity
                onPress={() => {
                  setIsDatePickerOpen(false);
                }}
              >
                <Text className="font-poppinsSemiBold text-accent">Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Create button */}
      <View>
        <TouchableOpacity
          className="bg-accent p-3 flex flex-row items-center rounded-md justify-center"
          onPress={handleAddGrocery}
        >
          <View className="mr-2">
            <MaterialIcons
              name="local-grocery-store"
              size={24}
              color={TAILWIND_THEME?.theme?.colors?.background as string}
            />
          </View>
          <Text className="text-background font-poppinsSemiBold">Confirm</Text>
        </TouchableOpacity>
      </View>

      <Toast
        hidden={hideAddGrocerySuccessToast}
        label="Grocery successfully added"
      />
    </View>
  );
};
