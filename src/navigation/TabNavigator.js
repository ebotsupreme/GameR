import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  MainStackNavigator,
  SavedRecipeStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Feed':
            iconName = 'search';
            break;
          case 'Saved Recipes':
            iconName = 'heart';
            break;
        }

        return (
          <Icon
            name={iconName}
            size={20}
            color={focused ? '#FF7900' : 'grey'}
          />
        );
      },
    })}>
    <Tab.Screen name="Feed" component={MainStackNavigator} />
    <Tab.Screen name="Saved Recipes" component={SavedRecipeStackNavigator} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
