import React from 'react';
import { View, Text } from 'react-native';

const LoadMessage = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Text
      style={{
        fontFamily: "Alata",
        fontSize: 30,
        color: "#444"
      }}>Carregando...</Text>
  </View>
  );
}

export default LoadMessage;