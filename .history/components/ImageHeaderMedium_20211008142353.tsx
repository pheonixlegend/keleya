import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageHeaderMedium() {
  return (
      <Image source={require('../assets/images/couch_smile.jpg')} style={styles.image} resizeMode="center">

    </Image>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '120%',
    height: '65%'
  }
});

