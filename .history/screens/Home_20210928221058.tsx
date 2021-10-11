import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import { Global } from '../styles/Global'

const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("Sign Up")
  }
  return (
    <SafeAreaView style={Global.container}>
      <Image source={require('../assets/images/keleya-logo.png')} style={styles.image} resizeMode="center" />
      <Text>Home</Text>
      <Button title="go to SignUp" onPress={pressHandler}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    justifyContent: 'flex-start'
});

export default Home
