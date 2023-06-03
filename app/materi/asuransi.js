import {
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors, GlobalStyle } from '../../constant';
import { asuransi } from '../../assets/images';
import { DisplayImage } from '../../components';

const index = () => {
  const router = useRouter();
  const data = [
    {
      name: 'PERBEDAAN',
      navigate: 'asuransiSyariah/1',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Video Pembelajaran Asuransi Syariah</Text>
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          height={216}
          videoId="DBsuJf7wyog"
        />
      </View>
      <View style={styles.video}>
        <YoutubePlayer
          height={216}
          videoId="5jamXljin-k"
        />
      </View>
      <DisplayImage data={[asuransi.asuransi1, asuransi.asuransi2]} />
      {data.map((x) => (
        <TouchableOpacity key={x.name} style={styles.buttonContainer} onPress={() => router.push(x.navigate)}>
          <Text style={styles.button}>{x.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
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
  video: {
    marginVertical: 8,
  },
  textContainer: {
    padding: 8,
    backgroundColor: Colors.darkPurple,
    margin: 8,
    borderRadius: 8,
    marginVertical: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
