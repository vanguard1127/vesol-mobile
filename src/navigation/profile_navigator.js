
// Dependencies
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import UpdateEmailScreen from '../screens/profile/update_email_screen';
import UserProfileScreen from '../screens/profile/user_profile_screen';
import UpdateNameScreen from '../screens/profile/update_name_screen';
import UpdatePhoneScreen from '../screens/profile/update_phone_screen';

const Stack = createStackNavigator();


export default function NonLoggedInNavigator(props){

  return(

    <Stack.Navigator initialRouteName="UserProfileScreen" headerMode="none">
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="UpdateEmailScreen" component={UpdateEmailScreen} />
      <Stack.Screen name="UpdateNameScreen" component={UpdateNameScreen} />
      <Stack.Screen name="UpdatePhoneScreen" component={UpdatePhoneScreen} />
    </Stack.Navigator>

  )
}
