import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from '../../constant';

const rangkuman = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('rangkuman/rangkuman')}>
        <Text style={styles.button}>View Rangkuman</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('rangkuman/glosarium')}>
        <Text style={styles.button}>View Glosarium</Text>
      </TouchableOpacity>
    </View>
  );
};

export default rangkuman;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.background,
  },
  button: {
    backgroundColor: Colors.black,
    padding: 8,
    color: Colors.white,
    margin: 4,
    fontSize: 18,
  },
});
