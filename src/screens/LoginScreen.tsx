import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from "../AuthProvider";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import Colors from '../constants/Colors';
import ScreenText from '../components/ScreenText';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <ScreenText style={ styles.heading }>Patients CRM</ScreenText>
        { error &&
          <ScreenText style={styles.error}>{ error }</ScreenText>
        }
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          textContentType="emailAddress"
          autoCapitalize = 'none'
        />
        <TextInput
          style={[styles.input, { marginTop: 24 } ]}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.actions}>
            <Button
            title="Login"
            onPress={() => login(email, password)}
            />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    heading: {
        fontSize: 25,
        color: Colors.primary,
        marginBottom: 20
    },
    error: { color: 'red', marginBottom: 24 },
    input: { height: 40, width: 300, borderColor: 'gray', borderWidth: 1, padding: 8 },
    actions: {
        marginTop: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: Colors.primary
    }
  })

  export default LoginScreen;
