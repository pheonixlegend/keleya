import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from '../screens/Home';
import ImageHeader from '../components/ImageHeader';
import SignUp from '../screens/SignUp';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const Stack = createStackNavigator();
    const appStack = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                headerShown: false,
                headerTransparent: true,
                headerStyle: {
                  },
                  headerBackTitleStyle: {
                      opacity: 0,
                  },
                  headerTintColor: 'transparent'
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen 
                    name="Sign Up" 
                    component={SignUp}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', paddingTop: '-30%' }} />)
                    }}
                />
            </Stack.Navigator>
        )
    }
export default appStack