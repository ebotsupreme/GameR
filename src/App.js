import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/crashlytics';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import DrawerNavigator from './navigation/DrawerNavigator';

const defaultAppCrashlytics = firebase.crashlytics();

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
  fonts: {
    regular: {
      fontFamily: 'AirbnbCerealApp-Medium',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'AirbnbCerealApp-Medium',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'AirbnbCerealApp-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'OpenSans-Light',
      fontWeight: '100',
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
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
