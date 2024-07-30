import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeIndex from '../screens/Home';
import Details from '../screens/Details';

export default function Router() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={HomeIndex}></stack.Screen>
        <stack.Screen name='Details' component={Details}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
