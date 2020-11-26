
// Dependencies
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import ConsoleScreen from '../screens/common/console_screen';
import ContactsScreen from '../screens/common/contacts_screen';

import Icon from '../assets/icons/icon';

const Tab = createBottomTabNavigator();

export default function ConsoleNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#00796B',
        inactiveTintColor: '#aaa',
      }}

    >
      <Tab.Screen
        name="Home"
        component={ConsoleScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='home'
              width={28}
              height={28}
              fill={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name='contact'
              width={28}
              height={28}
              fill={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
