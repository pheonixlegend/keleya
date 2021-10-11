import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ImageHeaderMedium() {
  return (
    
    <ImageBackground source={require('../assets/images/couch_smile.jpg')} style={styles.image} resizeMode="cover">
      <LinearGradient
        colors={['white', 'whitesmoke']}
        style={styles.con}
      >

      </LinearGradient>
    </ImageBackground>
            


        
    
  );
}

const styles = StyleSheet.create({
  image: {
    
    position: 'absolute',
    width: '100%',
    height: '80%',
  },
  con: {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    height: '10%',
    backgroundColor: 'transparent'
  }
});

