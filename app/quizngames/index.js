import {
  Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRouter, useSearchParams } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors, GlobalStyle } from '../../constant';
import { logoAplikasi } from '../../assets/images';

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { type } = useSearchParams();

  useEffect(() => {
    navigation.setOptions({ title: type?.toUpperCase() });
  }, [type]);

  return (
    <SafeAreaView style={styles.container}>
      {type === 'quiz' &&
      <>
        <Text style={styles.bold}>JAKUN</Text>
        <Text style={styles.bold}>(JAWAB KUIS NYOKK !)</Text>
        <Image source={logoAplikasi} style={styles.image} resizeMode="cover" />
      </>}
      {type === 'games' &&
      <View>
        <Text style={styles.bold}>REMEMBER ME !</Text>
        <Text style={styles.text}>WAJIB untuk melihat video ini sebelum menekan tombol START</Text>
        <YoutubePlayer
          height={216}
          videoId="psJc6Vxpvl8"
        />
      </View>}
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push(`/quizngames/${type}`)}>
        <Text style={styles.button}>START</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.back()}>
        <Text style={styles.button}>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',

  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '99%',
    backgroundColor: Colors.black,
    paddingVertical: 8,
    margin: 2,
    borderRadius: 2,
    ...GlobalStyle.shadow,
    alignItems: 'center',
  },
  button: {
    color: Colors.white,
  },
});
