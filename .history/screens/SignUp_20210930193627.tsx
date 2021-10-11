import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Global } from '../styles/Global';

const SignUp = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("Home")
  }

 return (

    <SafeAreaView style={Global.container}>
      <StatusBar backgroundColor={'transparent'} translucent/>

      <View style={styles.centeredView}>
        <Text style={styles.subText}>For a fit and relaxed pregnancy</Text>
      </View>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.customBtnBGBottom} onPress={pressHandler}>
        <Text style={styles.customBtnTextBottom}>Get started</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    height: '50%',
    resizeMode: 'cover'
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },

  image: {
    width: '23%',
    height: '100%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "500",
    marginTop: '-3%',
    width: '53%',
    color: "#4a4a4a"
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    height: '12.4%',
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '85%',
    height: '6.2%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '23%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnBGBottom2: {
    backgroundColor: "transparent",
    borderRadius: 7,
    width: '85%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 26,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  },

  customBtnTextBottom2: {
    fontSize: 21,
    fontWeight: "600",
    color: "#4a4a4a",
    textAlign: "center"
  }

});

export default SignUp