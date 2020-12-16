import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './src/Pages/Inicio/inicio';
import Login from './src/Pages/Login/login';
import estilo from './src/Pages/Login/estilo'

const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name="Inicio" component={Inicio} />
        <Navegacao.Screen name="Home" component={Login}
        options={{
          headerShown: false
        }} />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}

