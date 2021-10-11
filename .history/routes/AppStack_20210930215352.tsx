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
                    position: 'absolute',
                    top: 0,
                    left: 0,
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
                        headerShown: true,
                        header: () => <ImageHeader />,
                        headerLeft: ({ canGoBack, onPress }) => canGoBack && (
                            <Entypo
                                name="arrow-left"
                                size={22}
                                color="#4a4a4a"
                                onPress={onPress}
                            />
                        )
                    }}
                />
            </Stack.Navigator>
        )
    }
export default appStack