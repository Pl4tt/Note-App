import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./navigation/NavigationController";


export default function App() {
  return (
    <NavigationContainer>
      <NavigationController />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
