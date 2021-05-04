import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';
import { AuthProvider } from './src/AuthProvider';

export default function App() {
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}
