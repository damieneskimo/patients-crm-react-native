import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Routes from './src/Routes';
import { AuthProvider } from './src/AuthProvider';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [ isReady, setIsReady ] = useState(false);

  if (! isReady) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }
  
  return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
}
