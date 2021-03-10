import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';

import {
  MainStackNavigator,
  SavedRecipeStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { colors } = useTheme();

  return (
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
              color={focused ? colors.active : colors.disabled}
            />
          );
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 14, fontWeight: '600' },
        style: { backgroundColor: colors.primary },
        activeTintColor: colors.active,
        inactiveTintColor: colors.disabled,
      }}>
      <Tab.Screen name="Feed" component={MainStackNavigator} />
      <Tab.Screen name="Saved Recipes" component={SavedRecipeStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
