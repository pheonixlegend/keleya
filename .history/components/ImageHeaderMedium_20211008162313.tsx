import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ImageHeaderMedium() {
  return (
    
    <ImageBackground source={require('../assets/images/couch_smile.jpg')} style={styles.image} resizeMode="cover">
      <LinearGradient
        colors={['rgba(192,32,64,0.9)', 'transparent']}
        start={{x:0, y:1.0}}
        end={{x: 0, y: 0}}
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
    width: '100%',
    backgroundColor: 'transparent',
    left: 0, right: 0, bottom: 50, height: '10%'
  }
});

