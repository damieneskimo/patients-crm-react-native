
import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./AuthProvider";
import { Button, Text, View } from "react-native";
import { apiClient } from './api';
import PatientsListScreen from './screens/PatientsListScreen';
import NotesScreen from './screens/NotesScreen';

import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="PatientsList">
      <Stack.Screen name="PatientsList" component={PatientsListScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
    </Stack.Navigator>
  )
}
