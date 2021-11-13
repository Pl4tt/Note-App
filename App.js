import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./navigation/NavigationController";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
  return (
    <NavigationContainer>
      <NavigationController />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
