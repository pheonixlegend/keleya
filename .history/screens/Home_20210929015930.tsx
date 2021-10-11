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
      
      <Button 
        title="Get started"
        color="#841584" onPress={pressHandler}
      />

      <TouchableOpacity style={styles.customBtnBGBottom} onPress={() => {}}  >
        <Text style={styles.customBtnTextBottom}>Lets go!</Text>
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
    backgroundColor: "#4bc6a1",
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 7,
    height: '6.5%',
    width: '90%',
    marginTop: 2,
    marginRight: 15,
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    marginBottom: 15
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
