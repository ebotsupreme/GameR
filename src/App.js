import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/crashlytics';

import BottomTabNavigator from './navigation/TabNavigator';

const defaultAppCrashlytics = firebase.crashlytics();

/**
 *
 */
const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
