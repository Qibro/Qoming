/* eslint-disable react/jsx-props-no-spreading */
import {
  Text, Image, ImageBackground, StyleSheet, View,
} from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { logoAplikasi } from '../../assets/images';
import { Colors } from '../../constant';

const index = (props) => {
  const router = useRouter();
  return (
    <DrawerContentScrollView style={styles.container} {...props} bounces={false} drawer>
      <ImageBackground source={logoAplikasi} style={styles.imageHeader} resizeMode="stretch">
        <Image source={logoAplikasi} style={styles.logo} />
        <Text style={styles.title}>PENDIDIKAN AGAMA ISLAM MATERI : EKONOMI ISLAM</Text>
      </ImageBackground>
      <View style={styles.itemContainer}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Exit"
          onPress={() => router.back()}
          style={styles.item}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.logoBlue,
  },
  itemContainer: {
    backgroundColor: Colors.drawerBackground,
    flex: 1,
  },
  item: {
    color: '#0000',
  },
  imageHeader: {
    height: 175,
    padding: 16,
    flexDirection: 'row',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    position: 'absolute',
    left: 22,
    top: 50,
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    alignSelf: 'flex-end',
  },
});

export default index;
