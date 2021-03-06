import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from '@react-native-firebase/crashlytics';

import MainStackScreen from './navigation/MainStackScreen';
import Modal from './screens/Modal';

const defaultAppCrashlytics = firebase.crashlytics();
const RootStack = createStackNavigator();

/**
 *
 */
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
