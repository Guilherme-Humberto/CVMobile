import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Routes } from './src/routes/routes.js'
import * as Font from 'expo-font'
import { AppLoading } from 'expo';

const getFonts = () => {
  return Font.loadAsync({
    "Lora": require('./assets/fonts/Lora-VariableFont_wght.ttf'),
    "Roboto": require('./assets/fonts/Roboto-Bold.ttf'),
    "Cookie": require('./assets/fonts/Cookie-Regular.ttf'),
    "Alata": require('./assets/fonts/Alata-Regular.ttf')
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded) {
    return (
      <>
        <StatusBar style="auto" />
        <Routes />
      </>
    )
  }
  else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
    
    