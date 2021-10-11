import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  screenType: string;
}

const ImageHeaderMedium: FC<Props> = ({ screenType }) => {
  return (
    <Image source={require(screenType == "nameScreen" ? '../assets/images/couch_smile.jpg' 
    : '../assets/images/due-date-background-image.jpg')} 
    style={styles.image} resizeMode="cover">
    </Image>
  );
}
'../assets/images/couch_smile.jpg'

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '65%',
  }
});

export default ImageHeaderMedium