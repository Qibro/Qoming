import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Colors } from '../../constant';
import { DisplayImage } from '../../components';
import { syirkah } from '../../assets/images';

const index = () => (
  <ScrollView style={styles.container}>
    <View>
      <Text style={styles.bold}>VIDEO PEMBELAJARAN SYIRKAH</Text>
      <YoutubePlayer
        height={216}
        videoId="yrJJk6uq1os"
      />
    </View>
    <DisplayImage data={[syirkah.syirkah1, syirkah.syirkah2, syirkah.syirkah3]} />
  </ScrollView>
);

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  bold: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
