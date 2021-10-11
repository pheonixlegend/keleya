import React from 'react'
import { View, Text, Button } from 'react-native'
import { Global } from '../styles/Global'

const SignUp = ({navigation}: {navigation: any}) => {
const popHandler = () => {
  navigation.pop()
}
const pushHandler = () => {
navigation.push("Home")
}
return (
<View style={globalStyles.container}>
<Text>ReviewDetails</Text>
<Button title="go to home POP" onPress={popHandler} />
<Text> </Text>
<Button title="go to home PUSH" onPress={pushHandler} />
</View>
)
}
export default ReviewDetails
