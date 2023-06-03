import {
  ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Colors, GlobalStyle } from '../../constant';
import { bank } from '../../assets/images';
import { DisplayImage } from '../../components';

const index = () => {
  const router = useRouter();
  const data = [
    {
      name: 'PERBEDAAN',
      navigate: '/bankSyariah/perbedaan',
      params: { images: [bank.perbedaan.perbedaan1, bank.perbedaan.perbedaan2] },
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>VIDEO PEMBELAJARAN BANK SYARIAH</Text>
        </View>
        <YoutubePlayer
          height={216}
          videoId="KmJkwh3JD-8"
        />
      </View>
      <DisplayImage data={[bank.bank1, bank.bank2, bank.bank3, bank.bank4]} />
      {data.map((x) => (
        <TouchableOpacity key={x.name} style={styles.buttonContainer} onPress={() => router.push({ pathname: x.navigate, params: x.params })}>
          <Text style={styles.button}>{x.name}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={() => router.push('bankSyariah')}>
        <Text style={styles.exit}>NEXT</Text>
      </TouchableOpacity>
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
});
