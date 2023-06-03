import {
  Image,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { bank } from '../../assets/images';
import { Colors, GlobalStyle } from '../../constant';

const index = () => {
  const router = useRouter();
  const data = [
    {
      name: 'Mudharabah',
      navigate: '/bankSyariah/mudharabah',
      params: { images: [bank.mudharabah.mudharabah1, bank.mudharabah.mudharabah2] },
    },
    {
      name: 'Musyarakah',
      navigate: '/bankSyariah/musyarakah',
      params: { images: [bank.musyarakah.musyarakah1, bank.musyarakah.musyarakah2] },

    },
    {
      name: 'Murabahah',
      navigate: '/bankSyariah/murabahah',
      params: { images: [bank.murabahah.murabahah1, bank.murabahah.murabahah2] },

    },
    {
      name: 'Wadi\'ah',
      navigate: '/bankSyariah/wadiah',
      params: { images: [bank.wadiah.wadiah1, bank.wadiah.wadiah2] },

    },
    {
      name: 'Deposito',
      navigate: '/bankSyariah/deposito',
      params: { images: [bank.deposito.deposito1, bank.deposito.deposito2] },

    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Image source={bank.produk} style={styles.image} />
      {data.map((x) => (
        <TouchableOpacity key={x.name} style={styles.buttonContainer} onPress={() => router.push({ pathname: x.navigate, params: x.params })}>
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
