
import React, { useContext } from "react";
import { AuthContext } from './AuthProvider';
import { createStackNavigator } from "@react-navigation/stack";
import { Platform, Button } from "react-native";
import PatientsListScreen from './screens/PatientsListScreen';
import PatientDetailScreen from './screens/PatientDetailScreen';
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
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator 
      initialRouteName="PatientsList" 
      screenOptions={screenOptions}
    >
      <Stack.Screen 
        name="PatientsList" 
        component={PatientsListScreen} 
        options={{ 
          headerTitle: 'Patients',
          headerRight: () => {
            return <Button
              onPress={() => logout()}
              title="Logout"
              color="#888"
            />
          }
        }} />
      <Stack.Screen name="PatientDetail" component={PatientDetailScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} options={{ title: 'Notes' }} />
    </Stack.Navigator>
  )
}
