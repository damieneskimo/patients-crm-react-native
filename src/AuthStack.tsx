import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './screens/LoginScreen';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}
