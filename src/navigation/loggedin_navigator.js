
// Dependencies
import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import ProfileNavigator from './profile_navigator';
import ConsoleNavigator from './console_navigator';
import FullVideoScreen from '../screens/common/full_video_screen';
import SelectContactsScreen from '../screens/common/select_contacts_screen';
import UserProfileScreen from '../screens/profile/user_profile_screen';
import UpdatePhoneScreen from '../screens/profile/update_phone_screen';
import UpdateNameScreen from '../screens/profile/update_name_screen';

const Stack = createStackNavigator();

export default function LoggedInNavigator() {

  return (

    <Stack.Navigator initialRouteName="ConsoleNavigator" headerMode="none">
      <Stack.Screen name="ConsoleNavigator" component={ConsoleNavigator} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen name="FullVideoScreen" component={FullVideoScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="UpdatePhoneScreen" component={UpdatePhoneScreen} />
      <Stack.Screen name="UpdateNameScreen" component={UpdateNameScreen} />
      <Stack.Screen name="SelectContactsScreen" component={SelectContactsScreen} />
    </Stack.Navigator>

  );

}
