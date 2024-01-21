import clsx from 'clsx';
import { MotiPressable } from 'moti/interactions';
import { Text, View } from 'react-native';
import { useUserPreferenceAtom } from '../../../globalState/userPreferenceAtom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { updateUserPreferences } from '../../../utils/storage';
import { Toast } from '../../atoms/Toast';

export const PreferenceTemplate = () => {
  const [userPreference, setUserPreferenceAtom] = useUserPreferenceAtom();
  const [hideToast, setHideToast] = useState(true);
  const [toastLabel, setToastLabel] = useState('');
  const changeNotifyBefore = async (newDays: number) => {
    if (newDays < 1) {
      // Error toast
      setToastLabel('Notify before cannot be less than 1');
      setHideToast(false);
      setTimeout(() => {
        setHideToast(true);
      }, 3000);
      return;
    }
    const newUserPreference = {
      ...userPreference,
      notifyBefore: newDays,
    };
    setUserPreferenceAtom(newUserPreference);
    await updateUserPreferences(newUserPreference);
  };
  return (
    <View className={clsx('flex-1 bg-white px-2 flex relative')}>
      {/* User preference title */}
      <View className="mb-6">
        <Text className={clsx('font-poppinsBold text-4xl pt-4 text-accent')}>
          Preference
        </Text>
      </View>

      <View
        className={clsx(
          'border-2 border-accent rounded-md p-4 bg-white shadow-md'
        )}
      >
        {/* notify before how many days input */}
        <View className="flex flex-row items-center justify-between flex-wrap">
          <View className="flex flex-shrink">
            <View>
              <Text className={'font-poppinsBold mr-2 text-lg'}>
                Notify before
              </Text>
            </View>
          </View>
          <View className={'flex flex-row items-center flex-shrink-0'}>
            {/* Minus days button */}
            <View className="mr-2">
              <MotiPressable
                onPress={() => {
                  changeNotifyBefore(userPreference.notifyBefore - 1);
                }}
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
                <View className="rounded-md bg-accent flex justify-center items-center p-1">
                  <Ionicons name="remove" color="white" size={24} />
                </View>
              </MotiPressable>
            </View>
            {/* Days value */}

            <Text className="font-poppinsBold">
              {userPreference?.notifyBefore}
            </Text>
            {/* Add button */}
            <View className="ml-2">
              <MotiPressable
                onPress={() => {
                  changeNotifyBefore(userPreference.notifyBefore + 1);
                }}
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
                <View className="rounded-md bg-accent flex justify-center items-center p-1">
                  <Ionicons name="add" color="white" size={24} />
                </View>
              </MotiPressable>
            </View>
          </View>
        </View>
      </View>

      <Toast hidden={hideToast} label={toastLabel} variant="danger" />
    </View>
  );
};
