import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import React from 'react';

const Stack = createStackNavigator();
    const MyStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sign Up" component={SignUp} />
            </Stack.Navigator>
        )
    }
export default MyStack