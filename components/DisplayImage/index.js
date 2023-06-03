import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Colors } from '../../constant';

function display({ data }) {
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
    >
      {data.map((x) => <Image source={Number(x)} resizeMode="cover" resizeMethod="auto" style={styles.image} key={x} />)}
    </ScrollView>
  );
}

export default display;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
