import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import React from 'react';
import { Image } from 'react-native';

const Stack = createStackNavigator();
    const appStack = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                headerShown: false,
                headerTransparent: true,
                headerStyle: {
                    position: 'absolute',
                    top: 0,
                    left: 0
                  },
                  headerBackTitleStyle: {
                      opacity: 0,
                  },
                  headerTintColor: '#fff'
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sign Up" component={SignUp} options={{ 
      title: <Image style={{ width: 250, height: 50 }}
      source = require('../images/yourimage.png')}/> 
    }} />
            </Stack.Navigator>
        )
    }
export default appStack