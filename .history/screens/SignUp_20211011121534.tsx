import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, FC } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeader from '../components/ImageHeader';
import LoginSignupDetails from '../components/LoginSignupDetails';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routes/RootStackPrams';

type signUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

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
          <TouchableOpacity disabled={false} onPress={() => navigation.navigate('Name')}>
            <Text style={styles.customBtnTextBottom}>Create account</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
/* screenType == "signInScreen" ? { display: 'none'} : { display: 'flex'} */
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