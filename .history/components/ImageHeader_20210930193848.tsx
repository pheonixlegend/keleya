import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/authentication-background-image.jpg')} style={styles.image} resizeMode="cover" />
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
    height: '500%',
    position: 'absolute',
  },
  backIcon: {
    zIndex: 1,
    paddingLeft: '7.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

