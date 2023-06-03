import {
  Image,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { transaksi } from '../../assets/images';
import { Colors, GlobalStyle } from '../../constant';

const index = () => {
  const router = useRouter();
  const data = [
    {
      name: 'JUAL-BELI',
      navigate: '/transaksi/jual',
    },
    {
      name: 'SEWA-MENYEWA',
      navigate: '/transaksi/sewa',
    },
    {
      name: 'UTANG-PIUTANG',
      navigate: '/transaksi/utang',
    },
    {
      name: 'PINJAM-MEMINJAM',
      navigate: '/transaksi/pinjam',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Image source={transaksi.transaksi} style={styles.image} />
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
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  exit: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginRight: 16,
    margin: 8,
  },
});
