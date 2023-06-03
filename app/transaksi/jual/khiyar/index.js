import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors, GlobalStyle } from '../../../../constant';
import { DisplayImage } from '../../../../components';
import { transaksi } from '../../../../assets/images';

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Khiyar' });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DisplayImage data={[transaksi.jual.khiyar.khiyar1, transaksi.jual.khiyar.khiyar2]} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/transaksi/jual/khiyar/jenis')}>
          <Text style={styles.button}>Jenis Jenis Khiyar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={router.back}>
          <Text style={styles.exit}>BACK</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
  exit: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    margin: 16,
  },
});
