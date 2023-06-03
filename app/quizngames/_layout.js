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
  title: 'QUIZ',
};

export default function () {
  return (
    <Stack screenOptions={{ ...defaultOptions, animation: 'fade_from_bottom' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="result" options={{ title: 'Hasil Quiz' }} />
    </Stack>
  );
}
