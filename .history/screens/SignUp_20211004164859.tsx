import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeader from '../components/ImageHeader';
import LoginSignupDetails from '../components/LoginSignupDetails';

const SignUp = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("Home")
  }

 return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <ImageHeader/>
      <LoginSignupDetails  screenType="Welcome to React"/>
     
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customBtnBGBottom} onPress={pressHandler}>
            <Text style={styles.customBtnTextBottom}>Create account</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 19,
    width: '90%',
    fontWeight: "300",
    color: "#4a4a4a",
    paddingBottom: '7%'
  },

  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },

  customBtnBGBottom: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '80%',
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: '8%',
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