import { createStackNavigator } from '@react-navigation/stack';
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
                  }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>
        )
    }
export default appStack