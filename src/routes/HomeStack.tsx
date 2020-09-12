import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from '../screens/Chat';
import TabNavigator from './HomeTab';

const Stack = createStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
