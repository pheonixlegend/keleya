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
      <Image source={require('../assets/images/keleya-logo.png')} style={styles.image} resizeMode="center" />
      <Text>Home</Text>
      <Button title="go to SignUp" onPress={pressHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});

export default Home
