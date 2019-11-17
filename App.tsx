import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, } from 'react-native';
import Constants from 'expo-constants';
import AppNavigator from './AppNavigator';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
