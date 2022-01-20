import * as React from 'react';
import { useRef, useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../AuthProvider'
import { apiClient } from '../api';
import { StackNavigationProp } from '@react-navigation/stack';
import { Patient, RootStackParamList } from '../types';
import PatientListItem from '../components/PatientListItem';

type PatientsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PatientsList'
>;

type Props = {
  navigation: PatientsListScreenNavigationProp;
};

const PatientsListScreen = ({ navigation }: Props) => {
    const { user } = useContext(AuthContext)
    const [ patients, setPatients ] = useState<Patient[]>();
    const mountedRef = useRef(true);
  
    useEffect(() => {
        if (user !== null) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
            apiClient.get('/api/patients')
                .then(response => {
                    if (! mountedRef.current) return null;  
                  // console.log(response.data.data)
                    setPatients(response.data.data);
                })
                .catch(error => {
                    console.log(error.response);
                })
        }

        return () => { mountedRef.current = false; }
    }, []);
  
    return (
      <View>
        <FlatList 
          data={patients}
          renderItem={item => {
            return (
              <TouchableOpacity
                onPress={ () => navigation.navigate('PatientDetail', { id: item.item.id.toString() }) }>
                <PatientListItem item={item.item} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

export default PatientsListScreen;
