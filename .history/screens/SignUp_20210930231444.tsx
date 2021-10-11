import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeader from '../components/ImageHeader';

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

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 24,
    width: '90%',
    color: "#4a4a4a"
  },

  buttonContainer: {
    alignItems: 'center',
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '85%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 26,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  }

});

export default SignUp