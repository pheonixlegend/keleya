import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ImageHeaderMedium() {
  return (
    <View>
    <Image source={require('../assets/images/couch_smile.jpg')} style={styles.image} resizeMode="cover">

    </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '65%',
  }
});

