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
      <ImageHeader/>
      <View style={styles.centeredView}>
        <Text style={styles.subText}>Add your details below to set up an account</Text>
        
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
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '80%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },

  subText: {
    textAlign: 'center',
    fontSize: 25,
    width: '100%',
    fontWeight: "300",
    color: "#4a4a4a"
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    bottom: 0
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '85%',
    position: 'absolute',
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