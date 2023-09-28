import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

//all of the routing gets done here
const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
