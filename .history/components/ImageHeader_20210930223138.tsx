import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageHeader() {
  return (
      <ImageBackground source={require('../assets/images/authentication-background-image.jpg')} style={styles.image} resizeMode="cover">

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: '12%'
  },
  image: {
    flex: 1,
    position: 'relative',
    paddingTop: '12%',
    width: '100%',
  }
});

