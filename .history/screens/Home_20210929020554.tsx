import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Global } from '../styles/Global'

const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("Sign Up")
  }

  return (
    <ImageBackground source={require('../assets/images/first-intro-image.png')} style={styles.backgroundImage} >

    <SafeAreaView style={Global.container}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/keleya-logo.png')} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.centeredView}>
        <Text style={styles.subText}>For a fit and relaxed pregnancy</Text>
      </View>
      
      <TouchableOpacity style={styles.customBtnBGBottom} onPress={pressHandler}>
        <Text style={styles.customBtnTextBottom}>Get started</Text>
      </TouchableOpacity>
    </SafeAreaView>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%'
  },

  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: '20%',
    height: '100%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 23,
    marginTop: '-3%',
    width: '50%'
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    height: '6.5%',
    width: '85%',
    marginTop: 2,
    marginRight: 15,
    position: 'absolute', 
    bottom: 0,
    marginBottom: '20%'
  },

  customBtnTextBottom: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#fff",
    textAlign: "center",
    paddingTop: 3,
  }

});

export default Home
