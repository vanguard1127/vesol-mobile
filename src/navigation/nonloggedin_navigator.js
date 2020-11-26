
// Dependencies
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from '../screens/authentication/login_screen';
import SignupScreen from '../screens/authentication/signup_screen';
import CodeVerificationScreen from '../screens/authentication/code_verification_screen';
import ForgotPasswordScreen from '../screens/authentication/forgot_password_screen';

const Stack = createStackNavigator();


export default function NonLoggedInNavigator(props){

  return(

    <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="CodeVerificationScreen" component={CodeVerificationScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    </Stack.Navigator>

  )
}
