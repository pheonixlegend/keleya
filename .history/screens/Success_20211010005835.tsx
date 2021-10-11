import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Global } from '../styles/Global';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../routes/RootStackPrams';
import { Ionicons } from '@expo/vector-icons';

type successScreenProp = StackNavigationProp<RootStackParamList, 'Success'>;

function Success() {
  /* const signUpHandler = () => {
    navigation.push("Sign Up")
  }

  const signInHandler = () => {
    navigation.push("Sign In")
  }
 */
  const navigation = useNavigation<successScreenProp>();

  return (
    <ImageBackground source={require('../assets/images/notifications-background-image.jpg')} style={styles.backgroundImage} >

    <SafeAreaView style={Global.container}>
      <StatusBar backgroundColor={'transparent'} translucent/>

      <View style={styles.imageContainer}>
        <Ionicons 
          name='ios-notifications-outline' size={50}
          color="#4a4a4a"
        />
      </View>

      <View style={styles.centeredView}>
        <Text style={styles.subText}>Get notifications to boost your motivation</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customBtnBGBottom} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.customBtnTextBottom}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.customBtnBGBottom2} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.customBtnTextBottom2}>Allow notifications</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },

  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover'
  },

  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
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
    backgroundColor: "transparent",
    borderRadius: 7,
    width: '85%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '23%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnBGBottom2: {
    backgroundColor: "#69c0ba",
    borderRadius: 7,
    width: '85%',
    height: '9%',
    position: 'absolute',
    bottom: 0,
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  customBtnTextBottom: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4a4a4a",
    textAlign: "center"
  },

  customBtnTextBottom2: {
    fontSize: 28,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center"
  }

});

export default Success
