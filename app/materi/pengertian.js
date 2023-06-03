import React, { useEffect, useState } from 'react';
import {
  ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Audio } from 'expo-av';
import { useRouter } from 'expo-router';
import { DisplayImage } from '../../components';
import {
  pengertian,
} from '../../assets/images';
import { Colors, GlobalStyle } from '../../constant';
import { ekonomiIslamAudio, macamAudio } from '../../assets/audio';

const index = () => {
  const router = useRouter();
  const [audio, setAudio] = useState();

  const playSound = async (file) => {
    const { sound } = await Audio.Sound.createAsync(file);
    setAudio(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    audio?.unloadAsync();
  };

  useEffect(
    () => (audio ? () => audio?.unloadAsync()
      : undefined),
    [audio],
  );

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.row}>
        <Text style={styles.audio}>AUDIO:</Text>
        <TouchableOpacity style={styles.playContainer} onPress={() => playSound(ekonomiIslamAudio)}>
          <Text style={styles.play}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playContainer} onPress={stopSound}>
          <Text style={styles.play}>OFF</Text>
        </TouchableOpacity>
      </View>
      <DisplayImage data={[pengertian.pengertian1, pengertian.pengertian2, pengertian.pengertian3]} />
      <View style={styles.row}>
        <Text style={styles.audio}>AUDIO:</Text>
        <TouchableOpacity style={styles.playContainer} onPress={() => playSound(macamAudio)}>
          <Text style={styles.play}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.playContainer} onPress={stopSound}>
          <Text style={styles.play}>OFF</Text>
        </TouchableOpacity>
      </View>
      <DisplayImage data={[pengertian.muamalah.muamalah1, pengertian.muamalah.muamalah2, pengertian.muamalah.muamalah3]} />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/pengertian/prinsip')}>
        <Text style={styles.button}>Prinsip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/pengertian/tujuan')}>
        <Text style={styles.button}>Tujuan</Text>
      </TouchableOpacity>
    </ScrollView>);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  audio: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  playContainer: {
    backgroundColor: Colors.black,
    paddingHorizontal: 32,
    paddingVertical: 6,
    margin: 4,
    borderRadius: 2,
    ...GlobalStyle.shadow,
  },
  play: {
    color: Colors.white,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingVertical: 16,
    margin: 1,
    borderRadius: 2,
    ...GlobalStyle.shadow,
    alignItems: 'center',
  },
  button: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default index;
