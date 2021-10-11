import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Global } from '../styles/Global';
import ImageHeader from '../components/ImageHeader';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

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

        <TextInput
          placeholder={'example@gmail.com'}
          style={styles.input}
        />

        <View style={{ flexDirection: 'row-reverse'}}>
          <TextInput
            placeholder={'Enter a password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <MaterialIcons name='remove-red-eye' size={24} color="#4a4a4a" style={{position: 'absolute', marginRight: '0.5%',}}/>
        </View>

      </View>

      <View style={styles.checkboxView}>
          <CheckBox
            title="I've read the privacy policy"
            uncheckedColor='#9adcd7'
            size={26}
            containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent', margin: 0}}
          />
          <CheckBox
            title="I accept the terms & conditions and Keleya's advice"
            uncheckedColor='#9adcd7'
            size={26}
            containerStyle ={{backgroundColor: 'transparent', borderColor: 'transparent'}}
          />
        </View>


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

  centeredView: {
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
    color: "#4a4a4a",
    paddingBottom: '10%'
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
    width: '85%',
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
  },

  input: {
    width: '100%',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '3%',
    marginBottom: '10%',
    borderBottomColor: '#4a4a4a',
    borderBottomWidth: 1
  },

  checkboxView: {
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },

  label: {
    margin: 8,
  }
});

export default SignUp