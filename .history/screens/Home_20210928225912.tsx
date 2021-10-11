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
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/keleya-logo.png')} style={styles.image} resizeMode="contain" />
      </View>

      <Text>For a fit and relaxed pregnancy</Text>
      <Button title="go to SignUp" onPress={pressHandler}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%'
  },
  image: {
    width: '20%',
    height: '100%'
  }
});

export default Home
