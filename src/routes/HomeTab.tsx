import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Contacts from '../screens/Contacts';
import Chats from '../screens/Chats';
import Settings from '../screens/Settings';
import {Platform} from 'react-native';
import colors from '../styles/colors';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          paddingTop: Platform.OS === 'ios' ? 50 : 0,
        },
        activeTintColor: colors.primary,
        inactiveTintColor: '#999',
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen
        name="ChatStack"
        component={Chats}
        options={{
          title: 'Conversas',
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contatos',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
