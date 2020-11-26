
// Dependencies
import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

// Screens
import LoggedInNavigator from './loggedin_navigator.js';
import NonLoggedInNavigator from './nonloggedin_navigator.js';


const Stack = createStackNavigator();

export default function RootNavigator(props) {

    return(
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          { props.isLoggedIn ? (
            <Stack.Screen name="LoggedInNavigator" component={LoggedInNavigator} />
          ) : (
            <Stack.Screen name="NonLoggedInNavigator" component={NonLoggedInNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
