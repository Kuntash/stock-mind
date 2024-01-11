import { MotiText, MotiView } from 'moti';
import { ToastProps } from './type';
import clsx from 'clsx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TAILWIND_THEME } from '../../../theme';

export const Toast = (props: ToastProps) => {
  const { hidden, label } = props;
  if (hidden) return null;

  return (
    <MotiView
      from={{ opacity: 0, scale: 0, bottom: 10, right: 10 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing' }}
      style={{
        transformOrigin: 'left',
      }}
      className={clsx(
        'absolute',
        'bg-accent',
        'p-2',
        'rounded-md',
        'shadow-md',
        'flex flex-row items-center',
        'origin-right'
      )}
    >
      <Ionicons name="checkmark-circle-outline" color="white" size={24} />
      <MotiText className="font-poppinsSemiBold text-background ml-1">
        {label}
      </MotiText>
    </MotiView>
  );
};
