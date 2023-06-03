import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Colors, GlobalStyle } from '../constant';

const absensi = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [kelas, setKelas] = useState('');

  const insertToExcel = async () => {
    const url = 'https://docs.google.com/forms/d/e/1FAIpQLSe4k8JIu_OVSfTHlRx6FGaY3-aadHkw7_VSv1c2uHhUkwTxJA/formResponse';
    const payload = `?entry.1630269593=${name}&entry.1394624333=${kelas}`;
    return fetch(url.concat(payload))
      .then((res) => res.text())
      .then(() => {
        Alert.alert('INFO', 'Data berhasil disimpan');
      })
      .catch(() => Alert.alert('INFO', 'Data gagal disimpan'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formText}>Nama</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Kelas</Text>
        <TextInput style={styles.input} value={kelas} onChangeText={setKelas} />
      </View>
      <TouchableOpacity style={styles.button(true)} onPress={insertToExcel}>
        <Text style={styles.buttonText}>SIMPAN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button(false)} onPress={router.back}>
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: (type) => ({
    width: '50%',
    paddingVertical: 8,
    marginVertical: 2,
    alignItems: 'center',
    backgroundColor: type ? Colors.purple : Colors.black,
  }),
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  form: {
    alignItems: 'center',
    width: '80%',
    margin: 8,
    ...GlobalStyle.shadow,
  },
  formText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: Colors.white,
  },
});

export default absensi;
