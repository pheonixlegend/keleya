import React, { useState, FC } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

interface Props {
  screenType: string;
}

const { width, height } = Dimensions.get('window')

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
      style={[styles.image, screenType == "dateScreen" ? { height: height * 0.8 } //80%
      : { height: height * 0.60 }]} resizeMode="cover">
    </Image> //65%
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