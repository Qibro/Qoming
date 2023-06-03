import {
  Image,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors, GlobalStyle } from '../../../constant';
import { transaksi } from '../../../assets/images';

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Sewa Menyewa' });
  }, []);
  const data = [
    {
      name: 'Pengertian',
      navigate: '/transaksi/sewa/pengertian',
    },
    {
      name: 'RUKUN DAN SYARAT',
      navigate: '/transaksi/sewa/rukun',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Image source={transaksi.sewa.sewa1} style={styles.image} />
      {data.map((x) => (
        <TouchableOpacity key={x.name} style={styles.buttonContainer} onPress={() => router.push(x.navigate)}>
          <Text style={styles.button}>{x.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={router.back}>
        <Text style={styles.exit}>BACK</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderRadius: 12,
    ...GlobalStyle.shadow,
    alignItems: 'center',
    margin: 8,
  },
  button: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  exit: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.black,
    color: Colors.white,
    alignSelf: 'flex-start',
    marginRight: 16,
    margin: 8,
  },
});
