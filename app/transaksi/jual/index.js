import {
  Pressable,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { ResizeMode, Video } from 'expo-av';
import { Colors, GlobalStyle } from '../../../constant';
import { jualBeliVideo } from '../../../assets/video';

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const video = useRef();

  useEffect(() => {
    navigation.setOptions({ title: 'Jual Beli' });
  }, []);

  const data = [
    {
      name: 'PENGERTIAN',
      navigate: '/transaksi/jual/pengertian',
    },
    {
      name: 'RUKUN DAN SYARAT',
      navigate: '/transaksi/jual/rukun',
    },
    {
      name: 'KHIYAR',
      navigate: '/transaksi/jual/khiyar',
    },
    {
      name: 'RIBA',
      navigate: '/transaksi/jual/riba',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={jualBeliVideo}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          useNativeControls
        />
      </Pressable>
      {data.map((x) => (
        <TouchableOpacity key={x.name} style={styles.buttonContainer} onPress={() => router.push(x.navigate)}>
          <Text style={styles.button}>{x.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={router.back}>
        <Text style={styles.exit}>BACK</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    flexGrow: 1,
  },
  videoContainer: {
    height: 300,
  },
  video: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderRadius: 12,
    ...GlobalStyle.shadow,
    alignItems: 'center',
    margin: 8,
  },
  button: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 16,
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
