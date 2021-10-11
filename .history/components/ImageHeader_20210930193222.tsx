import * as React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageHeader() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/authentication-background-image.jpg')} style={styles.backgroundImage} resizeMode="cover" />
      <View style={styles.backIcon}>
        <Entypo name="arrow-left" size={22} color="#4a4a4a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: '12%'
  },
  image: {
    width: '100%',
    position: 'absolute',
  },
  backIcon: {
    zIndex: 1,
    paddingLeft: '7.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  }
});

