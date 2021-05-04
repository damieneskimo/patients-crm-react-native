import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../AuthProvider'
import { apiClient } from '../api';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type NotesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notes'
>;

type Props = {
  navigation: NotesScreenNavigationProp;
};

const NotesScreen = ({ navigation }: Props) => {
    const { user, logout } = useContext(AuthContext)
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button title="Back to Patients List" onPress={() => navigation.navigate('PatientsList')} />
        <Button title="Logout" onPress={() => logout()} />
      </View>
    );
}

export default NotesScreen;
