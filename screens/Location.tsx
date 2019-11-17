import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Location extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={{ fontSize: 25, justifyContent: 'center' }}>Location</Text>
          <Button
            title="Within 1 mile"
            onPress={() => this.props.navigation.navigate('Cusine')}
          />
          <Separator />
          <Button
            title="Within 5 mile"
            onPress={() => this.props.navigation.navigate('Cusine')}
          />
          <Separator />
          <Button
            title="Within 10 mile"
            onPress={() => this.props.navigation.navigate('Cusine')}
          />
          <Separator />
          <Button
            title="Within 25 mile"
            onPress={() => this.props.navigation.navigate('Cusine')}
          />
          <Separator />  
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    justifyContent: 'center'

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});