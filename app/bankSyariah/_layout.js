/* eslint-disable react/react-in-jsx-scope */
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Colors } from '../../constant';

const defaultOptions = {
  headerTitleAlign: 'left',
  headerTintColor: Colors.white,
  headerStyle: {
    backgroundColor: Colors.purple,
  },
  headerLeft: () => <View />,
  title: 'Bank Syariah',
};

export default function () {
  return (
    <Stack screenOptions={{ ...defaultOptions, animation: 'fade_from_bottom' }} />
  );
}
