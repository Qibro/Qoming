/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function PdfReader({ url: uri }) {
  return <WebView javaScriptEnabled style={styles.webView} source={{ uri }} />;
}
const index = () => (
  <PdfReader url="https://drive.google.com/file/d/1h1Ul6KWfe3eG9GarfNKh7YWfpmdL3Y7H/view?usp=sharing" />
);

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
});

export default index;
