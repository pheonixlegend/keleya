import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, FC } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeaderMedium from '../components/ImageHeaderMedium';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routes/RootStackPrams';
import NameTimeDetails from '../components/NameTimeDetails';
import AsyncStorage from '@react-native-community/async-storage';

type nameScreenProp = StackNavigationProp<RootStackParamList, 'Name'>;

var heightY = Dimensions.get("window").height;

function Name() {
  const navigation = useNavigation<nameScreenProp>();

  const [NameValidated, setNameValidated] = useState<boolean>(false);

  function handleCallbackName (nameData: any) {
    setNameValidated(nameData)
  }

 return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <ImageHeaderMedium screenType = "nameScreen"/>
      {<NameTimeDetails screenType = "nameScreen" callbackName = {handleCallbackName} /> }
     
      <View style={styles.buttonContainer}>
          <TouchableOpacity disabled={NameValidated == true ? false : true} 
            style={[styles.customBtnBGBottom, NameValidated == true ? { backgroundColor: "#69c0ba"} : { backgroundColor: "#9b9b9b"}]}
            onPress={() => navigation.navigate('Date')}>
            <Text style={styles.customBtnTextBottom}>Continue</Text>
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

export default Name
