import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';
import { screenOptions } from './AppStack';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }} />
    </Stack.Navigator>
  )
}
