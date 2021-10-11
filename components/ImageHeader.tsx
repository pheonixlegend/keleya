import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function ImageHeader() {
  return (
      <Image source={require('../assets/images/authentication-background-image.jpg')} style={styles.image} resizeMode="cover">

    </Image>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '50%'
  }
});

