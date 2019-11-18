import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default class Home extends Component<any, any> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Button
            title="Login with Facebook"
            onPress={() => this.props.navigation.navigate('Location')}
          />
          <Separator />
          <Button
            title="Login with Google"
            onPress={() => this.props.navigation.navigate('RestaurantDetails')}
          />
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