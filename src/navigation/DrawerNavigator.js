import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SavedRecipeStackNavigator } from './StackNavigator';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={BottomTabNavigator} />
    <Drawer.Screen name="Saved Recipes" component={SavedRecipeStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
