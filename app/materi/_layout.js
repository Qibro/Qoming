/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import { DrawerContent } from '../../components';
import { Colors } from '../../constant';

export default function () {
  const defaultOptions = {
    headerBackgroundContainerStyle: { color: Colors.background },
    headerTitleAlign: 'left',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.purple,
    },
  };

  const defaultLabel = (label, focused) => (
    <Text style={{ color: focused ? Colors.purple : Colors.white, fontWeight: '600' }}>{label}</Text>
  );
  return (
    <Drawer
      initialRouteName="home"
      drawerContent={(x) => DrawerContent(x)}
      screenOptions={{
        drawerItemStyle: {
          width: '100%',
          left: -10,
        },
        drawerActiveTintColor: '#000000',
        drawerActiveBackgroundColor: 'rgba(0, 0, 0, 0.2)',
        drawerIcon: () => (
          <View style={{
            backgroundColor: Colors.purple, width: 18, height: 18, borderRadius: 18 / 2,
          }}
          />
        ),
        ...defaultOptions,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: '',
          drawerLabel: ({ focused }) => defaultLabel('Beranda', focused),
          drawerItemStyle: {
            width: '100%',
            left: -10,
            marginTop: 8,
            marginBottom: 16,
          },
        }}
      />
      <Drawer.Screen
        name="petaKonsep"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Peta Konsep', focused),
          headerTitle: 'Peta Konsep Materi Ekonomi Islam',
        }}
      />
      <Drawer.Screen
        name="ayat"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Ayat-ayat Al Quran', focused),
          headerTitle: 'Ayat-ayat Al Quran',
        }}
      />
      <Drawer.Screen
        name="kisahInspiratif"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Kisah Inspiratif', focused),
          headerTitle: 'Kisah Inspiratif',
        }}
      />
      <Drawer.Screen
        name="pengertian"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Pengertian', focused),
          headerTitle: 'Pengertian',
        }}
      />
      <Drawer.Screen
        name="macam"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Macam-macam', focused),
          headerTitle: 'Macam-macam',
        }}
      />
      <Drawer.Screen
        name="syirkah"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Syirkah', focused),
          headerTitle: 'Syirkah',
        }}
      />
      <Drawer.Screen
        name="bank"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Bank Syariah', focused),
          headerTitle: 'Bank Syariah',
        }}
      />
      <Drawer.Screen
        name="asuransi"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Asuransi Syariah', focused),
          headerTitle: 'Asuransi Syariah',
        }}
      />
      <Drawer.Screen
        name="koperasi"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Koperasi Syariah', focused),
          headerTitle: 'Koperasi Syariah',
        }}
      />
      <Drawer.Screen
        name="rangkuman"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Rangkuman', focused),
          headerTitle: 'Rangkuman',
        }}
      />
      <Drawer.Screen
        name="learning"
        options={{
          drawerLabel: ({ focused }) => defaultLabel('Learning Resource', focused),
          headerTitle: 'Learning Resource',
        }}
      />
    </Drawer>
  );
}
