import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from '../screens/Home';
import ImageHeader from '../components/ImageHeader';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Name from '../screens/Name';
import Date from '../screens/Date';
import Workout from '../screens/Workout';
import Success from '../screens/Success';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import {RootStackParamList} from '../routes/RootStackPrams';

const Stack = createStackNavigator<RootStackParamList>();
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
                    name="SignUp" 
                    component={SignUp}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
                <Stack.Screen 
                    name="SignIn" 
                    component={SignIn}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
                <Stack.Screen 
                    name="Name" 
                    component={Name}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
                <Stack.Screen 
                    name="Date" 
                    component={Date}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
                <Stack.Screen 
                    name="Workout" 
                    component={Workout}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
                <Stack.Screen 
                    name="Success" 
                    component={Success}
                    options={{
                        headerShown: true,
                        headerBackImage: ()=>(<Entypo name='arrow-left' size={22}
                        color="#4a4a4a" style={{ paddingLeft: '20%', marginTop: '-10%' }} />)
                    }}
                />
            </Stack.Navigator>
        )
    }
export default appStack