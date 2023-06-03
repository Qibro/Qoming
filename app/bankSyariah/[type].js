import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';
import { Colors } from '../../constant';
import { DisplayImage } from '../../components';

const index = () => {
  const router = useRouter();
  const { images, type } = useSearchParams();
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: type.toUpperCase() });
  }, []);

  useEffect(() => {
    const newImages = images.split(',');
    setData(newImages);
  }, [images]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DisplayImage data={data} />
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
