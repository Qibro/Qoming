import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../../constant';
import { DisplayImage } from '../../../../components';
import { transaksi } from '../../../../assets/images';

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Jenis Jenis Khiyar' });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DisplayImage data={[transaksi.jual.khiyar.jenisKhiyar1, transaksi.jual.khiyar.jenisKhiyar2, transaksi.jual.khiyar.jenisKhiyar3]} />
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
