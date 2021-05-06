
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import PatientsListScreen from './screens/PatientsListScreen';
import NotesScreen from './screens/NotesScreen';
import Colors from './constants/Colors';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const screenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android'? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android'? '#fff' : Colors.primary
}

export const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="PatientsList" 
      screenOptions={screenOptions}
    >
      <Stack.Screen name="PatientsList" component={PatientsListScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
    </Stack.Navigator>
  )
}
