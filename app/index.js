import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { backgroundMin, logoAplikasi } from '../assets/images';
import { Colors, GlobalStyle } from '../constant';

export default function Page() {
  const router = useRouter();
  return (
    <ImageBackground source={backgroundMin} style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Q O M I N G</Text>
        <Text style={styles.subtitle}>(Iqtishod Islamiyah Learning)</Text>
        <Image source={logoAplikasi} style={styles.image} resizeMode="cover" />
        <TouchableOpacity
          style={styles.shadow}
          onPress={() => router.push('/home')}
        >
          <Text style={styles.button}>MASUK</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
    width: '80%',
    height: '45%',
    ...GlobalStyle.shadow(1),
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: Colors.white,
  },
  subtitle: {
    color: Colors.white,
    fontStyle: 'italic',
  },
  image: {
    width: '85%',
    height: '70%',
  },
  shadow: {
    ...GlobalStyle.shadow(2),
    width: '45%',
    backgroundColor: Colors.transparent,
  },
  button: {
    textAlign: 'center',
    marginVertical: 8,
    padding: 8,
    borderRadius: 20,
    color: Colors.white,
    backgroundColor: Colors.background,
    overflow: 'hidden',
    ...GlobalStyle.shadow(2),
  },
});
