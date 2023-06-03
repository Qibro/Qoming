/* eslint-disable import/no-extraneous-dependencies */
import { useRouter, useSearchParams } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';
import { rangkuman } from '../../assets/images';
import { DisplayImage } from '../../components';
import { Colors } from '../../constant';

function PdfReader({ url: uri }) {
  return <WebView javaScriptEnabled style={styles.webView} source={{ uri }} />;
}
const index = () => {
  const { type } = useSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {type === 'rangkuman' &&
        <ScrollView>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Konsep dan Prinsip Ekonomi Dalam Islam</Text>
            </View>
            <View style={styles.youtube}>
              <YoutubeIframe
                height={216}
                videoId="jsE-ls4Rq7Q"
              />
            </View>
            <View style={styles.youtube}>
              <YoutubeIframe
                height={216}
                videoId="cRR_JFl_LJ8"
              />
            </View>
          </View>
          <DisplayImage data={[
            rangkuman.rankuman1,
            rangkuman.rankuman2,
            rangkuman.rankuman3,
            rangkuman.rankuman4,
            rangkuman.rankuman5,
            rangkuman.rankuman6,
          ]}
          />
          <TouchableOpacity onPress={router.back}>
            <Text style={styles.exit}>BACK</Text>
          </TouchableOpacity>
        </ScrollView>}
      {type === 'glosarium' &&
        <>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Glosarium</Text>
            </View>
            <PdfReader
              url="https://drive.google.com/file/d/1YYVqirfj0p4IdfIXqpRNe8LOKpKIsXJx/preview"
            />
          </View>
          <TouchableOpacity onPress={router.back}>
            <Text style={styles.exit}>BACK</Text>
          </TouchableOpacity>
        </>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
  youtube: {
    marginVertical: 8,
  },
});

export default index;
