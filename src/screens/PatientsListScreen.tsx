import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../AuthProvider'
import { apiClient } from '../api';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type PatientsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PatientsList'
>;

type Props = {
  navigation: PatientsListScreenNavigationProp;
};

const PatientsListScreen = ({ navigation }: Props) => {
    const { user, logout } = useContext(AuthContext)
    const [ name, setName ] = useState(null);
  
    useEffect(() => {
        if (user !== null) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
            apiClient.get('/api/user')
                .then(response => {
                    setName(response.data.name);
                })
                .catch(error => {
                    console.log(error.response);
                })
        }
    }, []);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen Logged In View</Text>
        {/* <Text>User: {user.email}</Text> */}
        <Text>User from Server: {name}</Text>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    );
  }

export default PatientsListScreen;
