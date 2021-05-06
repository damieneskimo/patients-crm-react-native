import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiClient } from './api';

import { User, AuthContent } from './types';

export const AuthContext = React.createContext<AuthContent>({
  user: null,
  setUser: () => {},
  error: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{}> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login: (email: string, password: string) => {
          apiClient.post('/api/token', {
            email,
            password,
            device_name: 'mobile',
          })
          .then(response => {
            console.log(response)
            const userResponse = {
              email: response.data.user.email,
              token: response.data.token,
            }
            setUser(userResponse);
            setError(null);
            SecureStore.setItemAsync('user', JSON.stringify(userResponse));
          })
          .catch(error => {
            const key = Object.keys(error.response.data.errors)[0];
            setError(error.response.data.errors[key][0]);
          })
        },
        logout: () => {
          if (user !== null) {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

            apiClient.post('/api/logout')
            .then(response => {
              setUser(null);
              SecureStore.deleteItemAsync('user')
            })
            .catch(error => {
              console.log(error.response);
            })
          }
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
};
