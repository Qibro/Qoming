import {
  ScrollView, StyleSheet,
} from 'react-native';
import React from 'react';
import YoutubeIframe from 'react-native-youtube-iframe';
import { Colors } from '../../constant';

const learning = () => (
  <ScrollView style={styles.container}>
    <YoutubeIframe
      height={216}
      videoId="_44pe9_iu14"
    />
    <YoutubeIframe
      height={216}
      videoId="8lXszOx9Xus"
    />
    <YoutubeIframe
      height={216}
      videoId="UWAX3Lj1h0A"
    />
  </ScrollView>
);

export default learning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
