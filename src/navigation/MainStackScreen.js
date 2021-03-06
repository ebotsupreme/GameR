import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Recipe from '../screens/Recipe';
import Logo from '../common/components/Logo';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        // backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: (props) => <Logo {...props} />,
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Sign In"
            color="#FF7900"
          />
        ),
      }}
    />
    <MainStack.Screen name="Recipe" component={Recipe} />
  </MainStack.Navigator>
);

export default MainStackScreen;
