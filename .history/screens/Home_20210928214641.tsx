import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Global } from '../styles/Global'

const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("Sign Up")
  }
  return (
    <View style={Global.container}>
      <Image source={require('../assets/images/keleya-logo.png')} />
      <Text>Home</Text>
      <Button title="go to SignUp" onPress={pressHandler}
      />
    </View>
  )
}

export default Home
