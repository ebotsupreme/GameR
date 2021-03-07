import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  MainStackNavigator,
  SavedRecipeStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={MainStackNavigator} />
    <Tab.Screen name="Saved Recipes" component={SavedRecipeStackNavigator} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
