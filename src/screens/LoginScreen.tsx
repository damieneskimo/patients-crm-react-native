import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from "../AuthProvider";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        { error &&
          <Text style={{ color: 'red', marginBottom: 24 }}>{ error }</Text>
        }
        <TextInput
          style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, padding: 8 }}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          textContentType="emailAddress"
          autoCapitalize = 'none'
        />
        <TextInput
          style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, padding: 8, marginTop: 24 }}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="Login"
          onPress={() => login(email, password)}
        />
      </View>
    );
  }

  export default LoginScreen;