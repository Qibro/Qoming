import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';
import { Colors } from '../../constant';
import { DisplayImage } from '../../components';
import { asuransi } from '../../assets/images';

const index = () => {
  const router = useRouter();
  const { page } = useSearchParams();
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Perbedaan' });
  }, []);

  useEffect(() => {
    if (page === '1') setData([asuransi.asuransi3, asuransi.asuransi4, asuransi.asuransi5]);
    if (page === '2') setData([asuransi.asuransi6, asuransi.asuransi7]);
  }, [page]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DisplayImage data={data} />
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={router.back}>
            <Text style={styles.exit}>BACK</Text>
          </TouchableOpacity>
          {page === '1' &&
          <TouchableOpacity style={styles.button} onPress={() => router.push('asuransiSyariah/2')}>
            <Text style={styles.exit}>NEXT</Text>
          </TouchableOpacity>}
        </View>

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
