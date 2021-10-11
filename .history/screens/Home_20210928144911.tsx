import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Global } from '../styles/Global'

const Home = ({navigation}: {navigation: any}) => {
  const pressHandler = () => {
    navigation.push("ReviewDetails")
  }
  return (
    <View style={Global.container}>
      <Text>Home</Text>
      <Button title="go to Review" onPress={pressHandler}
      />
    </View>
  )
}

export default Home
