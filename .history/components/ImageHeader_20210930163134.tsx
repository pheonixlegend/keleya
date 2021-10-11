import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function ImageHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/authentication-background-image.jpg')} style={styles.image} resizeMode="cover" />
      <View style={styles.heading}>
        <Text>Click left</Text>
        <Text style={styles.text}>Click right</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: '10%',
    outerHeight: '50%'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heading: {
    zIndex: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'red',
  }
});
