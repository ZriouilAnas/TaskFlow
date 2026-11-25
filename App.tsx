import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AccueilScreen from './src/screens/AccueilScreen';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AccueilScreen />
    </>
  );
}
registerRootComponent(App);
