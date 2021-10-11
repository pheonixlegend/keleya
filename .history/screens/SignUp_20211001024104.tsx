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
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <ImageHeader/>
      <View style={styles.centeredView}>
        <Text style={styles.subText}>Add your details below to set up an account</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customBtnBGBottom} onPress={pressHandler}>
            <Text style={styles.customBtnTextBottom}>Get started</Text>
          </TouchableOpacity>
      </View>
      </View>
      
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

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
    width: '90%',
    fontWeight: "300",
    color: "#4a4a4a"
  },

  buttonContainer: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    bottom: 0,
    position: 'relative',
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '85%',
    height: '6.2%',
    marginBottom: '23%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 26,
    fontWeight: "500",
    color: "#ffff",
    textAlign: "center"
  }

});

export default SignUp