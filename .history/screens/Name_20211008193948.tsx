import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeaderMedium from '../components/ImageHeaderMedium';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackPrams';
import NameTimeDetails from '../components/NameTimeDetails';

type nameScreenProp = StackNavigationProp<RootStackParamList, 'Name'>;

function Name() {
  const navigation = useNavigation<nameScreenProp>();

 return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'transparent'} translucent/>
      <ImageHeaderMedium screenType = "dateScreen"/>
      {<NameTimeDetails screenType = "nameScreen" /> }
     
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customBtnBGBottom} onPress={() => navigation.navigate('Home')}>
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

export default Name
