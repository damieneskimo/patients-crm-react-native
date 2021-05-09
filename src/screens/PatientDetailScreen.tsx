import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../AuthProvider';
import { apiClient } from '../api';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Patient } from '../types';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'PatientDetail'>;
type NotesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PatientDetail'
>;

type Props = {
  navigation: NotesScreenNavigationProp,
  route: ProfileScreenRouteProp
};

const PatientDetailScreen = ({ route, navigation }: Props) => {
    const { user } = useContext(AuthContext);
    const { id } = route.params;
    const [ patient, setPatient ] = useState<Patient>();

    useEffect(() => {
        if (user !== null) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
            apiClient.get('/api/patients/' + id)
                .then(response => {
                    setPatient(response.data);
                })
                .catch(error => {
                    console.log(error.response);
                })
        }
    }, []);

    if (patient === undefined) {
        return <Text>Patient not found</Text>
    } else {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{ patient.name }</Text>
                <Button title="Notes" onPress={() => navigation.navigate('Notes', {patientId: patient.id.toString()})} />
            </View>
          );
    }
}

export default PatientDetailScreen;