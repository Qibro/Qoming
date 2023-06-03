import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import {
  absensi, kiKd,
} from '../assets/images';
import { Colors, GlobalStyle } from '../constant';

const home = () => {
  const router = useRouter();

  const MENU = [
    {
      name: 'MATERI',
      navigate: './materi',
      params: '',
    },
    {
      name: 'QUIZ',
      navigate: 'quizngames',
      params: { type: 'quiz' },
    },
    {
      name: 'GAMES',
      navigate: 'quizngames',
      params: { type: 'games' },
    },
  ];
  return (
    <View
      style={styles.container}
    >
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.headerText} numberOfLines={2}>
            Hidup Berkah dengan Ekonomi Islam
          </Text>
        </View>
        <View style={styles.midMenu}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => router.push({
              pathname: '/kiKd',
            })}
          >
            <Image
              source={kiKd.logo}
              resizeMode="cover"
              resizeMethod="resize"
              style={styles.image}
            />
            <Text style={styles.imageText}>KI & KD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => router.push('/absensi')}
          >
            <Image
              source={absensi}
              resizeMode="cover"
              resizeMethod="resize"
              style={styles.image}
            />
            <Text style={styles.imageText}>ABSENSI</Text>
          </TouchableOpacity>
        </View>
        {MENU.map((x) => (
          <TouchableOpacity style={styles.button} key={x.name} onPress={() => router.push({ pathname: x.navigate, params: x.params })}>
            <Text style={styles.buttonText}>{x.name}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.view} />
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.exit}>EXIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    padding: 8,
    backgroundColor: Colors.blue,
    borderRadius: 20,
    margin: 8,
    ...GlobalStyle.shadow(1),
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    margin: 16,
    ...GlobalStyle.shadow(1),
  },
  midMenu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 32,
  },
  imageContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.blue,
    ...GlobalStyle.shadow(1),
  },
  image: {
    height: 100,
    width: 100,
  },
  imageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  button: {
    borderRadius: 20,
    margin: 8,
    height: '12%',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    ...GlobalStyle.shadow(1),
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  exit: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.purple,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  view: {
    height: '10%',
  },
});
