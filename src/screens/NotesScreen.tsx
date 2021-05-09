import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { AuthContext } from '../AuthProvider'
import { apiClient } from '../api';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Note } from '../types';

type NotesScreenRouteProp = RouteProp<RootStackParamList, 'Notes'>;
type NotesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notes'>;

type Props = {
  navigation: NotesScreenNavigationProp,
  route: NotesScreenRouteProp
};

const NotesScreen = ({ route, navigation }: Props) => {
    const { user } = useContext(AuthContext)
    const { patientId } = route.params;
    const [ notes, setNotes ] = useState<[Note]>();

    if (user !== null) {
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

      apiClient.get('/api/patients/' + patientId + '/notes')
          .then(response => {
            console.log(response.data.data)
              setNotes(response.data.data);
          })
          .catch(error => {
              console.log(error.response);
          })
  }
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList 
          data={notes}
          renderItem={item => {
            return (
              <Text>{item.item.content}</Text>
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Back to Patients List" onPress={() => navigation.navigate('PatientsList')} />
      </View>
    );
}

export default NotesScreen;
