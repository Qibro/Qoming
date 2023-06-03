import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useSearchParams } from 'expo-router/src/LocationProvider';
import { useRouter } from 'expo-router';
import { rating } from '../../assets/images';
import { Colors, GlobalStyle } from '../../constant';

const result = () => {
  const { point } = useSearchParams();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={rating} style={styles.image} resizeMode="center" />
        <Text style={styles.bold}>CONGRATULATION !</Text>
        <Text style={styles.text}>Skor Kamu adalah :</Text>
        <Text style={styles.bold}>{point}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.back()}>
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default result;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    ...GlobalStyle.shadow(2),
    margin: 8,
    width: '95%',
    padding: 8,
  },
  image: {
    width: 150,
    height: 75,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 8,
  },
  text: {
    fontSize: 20,
  },
  button: {
    color: Colors.white,
    fontSize: 16,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: Colors.black,
    margin: 8,
  },
});
