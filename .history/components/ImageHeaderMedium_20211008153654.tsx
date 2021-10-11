import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ImageHeaderMedium() {
  return (
    <View style={styles.con}>
    <Image source={require('../assets/images/couch_smile.jpg')} style={styles.image} resizeMode="cover">
    </Image>
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
    </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '65%',
  },
  con: {
    flex: 1
  }
});

