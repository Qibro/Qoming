import {
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../constant';
import { DisplayImage } from '../components';
import { kiKd } from '../assets/images';

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <DisplayImage data={[kiKd.kikd1, kiKd.kikd2, kiKd.kikd3]} />
        <TouchableOpacity style={styles.button} onPress={router.back}>
          <Text style={styles.exit}>BACK</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 16,
  },
});

export default index;
