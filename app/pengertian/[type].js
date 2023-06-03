import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { useRouter, useSearchParams } from 'expo-router';
import { Colors, GlobalStyle } from '../../constant';
import { prinsipAudio, tujuanAudio } from '../../assets/audio';
import { DisplayImage } from '../../components';
import {
  pengertian,
} from '../../assets/images';

const index = () => {
  const router = useRouter();
  const { type } = useSearchParams();
  const [audio, setAudio] = useState();
  const [data, setData] = useState({
    audio: null,
    images: [],
  });

  useEffect(() => {
    if (type === 'prinsip') {
      setData({
        audio: prinsipAudio,
        images: [pengertian.prinsip.prinsip1, pengertian.prinsip.prinsip2, pengertian.prinsip.prinsip3],
      });
    } else if (type === 'tujuan') {
      setData({
        audio: tujuanAudio,
        images: [pengertian.tujuan.tujuan1, pengertian.tujuan.tujuan2, pengertian.tujuan.tujuan3],
      });
    }
  }, [type]);

  useEffect(
    () => (audio ? () => audio?.unloadAsync()
      : undefined),
    [audio],
  );

  const playSound = async (file) => {
    const { sound } = await Audio.Sound.createAsync(file);
    setAudio(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    audio?.unloadAsync();
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={styles.audio}>AUDIO:</Text>
          <TouchableOpacity style={styles.playContainer} onPress={() => playSound(data.audio)}>
            <Text style={styles.play}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playContainer} onPress={stopSound}>
            <Text style={styles.play}>OFF</Text>
          </TouchableOpacity>
        </View>
        <DisplayImage data={data.images} />
        <TouchableOpacity onPress={router.back}>
          <Text style={styles.exit}>BACK</Text>
        </TouchableOpacity>
      </SafeAreaView>
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
  exit: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.black,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginRight: 16,
    margin: 8,
  },
});

export default index;
