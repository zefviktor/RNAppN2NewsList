import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import MainStack from './navigate';




export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  prepareResources = async () => {
    await Font.loadAsync({
                'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
                'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
              });

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <MainStack />
    )
  }
}

