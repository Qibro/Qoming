import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { DisplayImage } from '../../components';
import {
  koperasi,
} from '../../assets/images';
import { Colors } from '../../constant';

const index = () => (
  <ScrollView bounces={false} style={styles.container}>
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>VIDEO PEMBELAJARAN KOPERASI SYARIAH</Text>
      </View>
      <YoutubePlayer
        height={216}
        videoId="5ycRinUPh1w"
      />
    </View>
    <DisplayImage data={[koperasi.koperasi1, koperasi.koperasi2, koperasi.koperasi3]} />
  </ScrollView>
);

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
