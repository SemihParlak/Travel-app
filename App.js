import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';
import DubaiScreen from './screens/DubaiScreen';
import EverestScreen from './screens/EverestScreen';
import SwedenScreen from './screens/SwedenScreen';
import ItalyScreen from './screens/ItalyScreen';

const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Deneme Ekranı" component={ButtonScreen} />
        <Stack.Screen name="Italy" component={ItalyScreen} />
        <Stack.Screen name="Dubai" component={DubaiScreen} />
        <Stack.Screen name="Everest" component={EverestScreen} />
        <Stack.Screen name="Sweden" component={SwedenScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})