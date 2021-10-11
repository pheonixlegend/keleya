import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, FC } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeader from '../components/ImageHeader';
import LoginSignupDetails from '../components/LoginSignupDetails';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routes/RootStackPrams';

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const { width, height } = Dimensions.get('window')

function SignUp() {
  const navigation = useNavigation<signUpScreenProp>();

  const [EmailValidated, setEmailValidated] = useState<boolean>(false);
  const [PasswordValidated, setPasswordValidated] = useState<boolean>(false);

  function handleCallbackEmail (emailData: any) {
    setEmailValidated(emailData)
  }

  function handleCallbackPassword (passwordData: any) {
    setPasswordValidated(passwordData)
  }

 return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <ImageHeader/>
      <LoginSignupDetails screenType = "signUpScreen" callbackEmail = {handleCallbackEmail} callbackPassword = {handleCallbackPassword} />
     
      <View style={styles.buttonContainer}>
      
          <TouchableOpacity disabled={EmailValidated && PasswordValidated == true ? false : true} 
            style={[styles.customBtnBGBottom, EmailValidated && PasswordValidated == true ? { backgroundColor: "#69c0ba"} : { backgroundColor: "#9b9b9b"}]}
            onPress={() => navigation.navigate('Name')}>
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
    borderRadius: 7,
    width: '80%',
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: height * 0.020, // 8%
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 26,
    fontWeight: "500",
    color: "#ffff",
    textAlign: "center"
  },

  customBtnTextBottom2: {
    fontSize: 26,
    fontWeight: "500",
    color: 'black',
    textAlign: "center"
  }

});

export default SignUp