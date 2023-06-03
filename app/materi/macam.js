import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { DisplayImage } from '../../components';
import { macam } from '../../assets/images';
import { Colors, GlobalStyle } from '../../constant';

const index = () => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <DisplayImage data={[macam.macam1, macam.macam2, macam.macam3]} />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('transaksi')}>
        <Text style={styles.button}>Transaksi Ekonomi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
    borderRadius: 4,
    ...GlobalStyle.shadow,
    alignItems: 'center',
    margin: 4,
  },
  button: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default index;
