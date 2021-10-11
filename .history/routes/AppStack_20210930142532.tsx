import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import React from 'react';

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
                <Stack.Screen 
                    name="Sign Up" 
                    component={SignUp} 
                    options={{
                        headerTitle: (props) => ( // App Logo
                            <Image
                              style={{ width: 200, height: 100 }}
                              source={require('../assets/images/authentication-background-image.jpg')}
                              resizeMode='contain'
                            />
                          )
                    }} />
            </Stack.Navigator>
        )
    }
export default appStack