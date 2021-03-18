import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/crashlytics';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { DrawerNavigator } from './navigation/index';

// redux toolkit example
import store from './app/store';

import Config from 'react-native-config';

const defaultAppCrashlytics = firebase.crashlytics();
/**
 *
 */
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#35b9c0', // main blue
    accent: '#de6f51', // red orange
    background: 'white',
    text: '#1c1e1f',
    disabled: '#d3d3d3',
    active: 'white',
    // placeholder: '',
    // backdrop: '',
  },
  /**
   * Circular Air Pro is the main Airbnb typeface.
   * Its three main weights are light, bold, and black.
   * Use light for paragraphs and subheads,
   * black or bold for titles,
   * and bold for special moments.
   *
   */
  fonts: {
    regular: {
      fontFamily: 'AirbnbCerealApp-Light',
      fontWeight: '500',
    },
    medium: {
      fontFamily: 'AirbnbCerealApp-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'AirbnbCerealApp-Light',
      // fontWeight: '300',
    },
    thin: {
      fontFamily: 'AirbnbCerealApp-Light',
      // fontWeight: '100',
    },
    airbnbCereal: {
      black: 'AirbnbCerealApp-Black',
      light: 'AirbnbCerealApp-Light',
      medium: 'AirbnbCerealApp-Medium',
      bold: 'AirbnbCerealApp-Bold',
    },
    openSans: {
      light: 'OpenSans-Light',
      regular: 'OpenSans-Regular',
      semiBold: 'OpenSans-SemiBold',
      bold: 'OpenSans-Bold',
    },
  },
};
/**
 *
 */
const App = () => {
  console.log('configgg', Config);
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
