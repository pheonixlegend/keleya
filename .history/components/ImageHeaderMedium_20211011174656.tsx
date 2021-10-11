import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  screenType: string;
}

const ImageHeaderMedium: FC<Props> = ({ screenType }) => {

  let imageCondition = require('../assets/images/couch_smile.jpg')

  if (screenType == "dateScreen") {
    imageCondition = require('../assets/images/due-date-background-image.jpg')
  }
  else if (screenType == "workoutScreen") {
    imageCondition = require('../assets/images/workout-goal-background-image.jpg')
  }

  return (
    <Image source={imageCondition} 
      style={[styles.image, screenType == "dateScreen" ? { height: '80%' } 
      : { height: '65%' }]} resizeMode="contain">
    </Image>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%'
  }
});

export default ImageHeaderMedium