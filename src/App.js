import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/crashlytics';

import DrawerNavigator from './navigation/DrawerNavigator';

const defaultAppCrashlytics = firebase.crashlytics();

/**
 *
 */
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
