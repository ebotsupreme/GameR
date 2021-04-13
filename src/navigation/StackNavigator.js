import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, IconButton } from 'react-native-paper';

import { HeaderNavigator } from '../navigation/index';

import {
  Feed,
  Details,
  SavedRecipes,
  SearchRecipes,
  SearchResults,
  ReduxTest,
} from '../screens/index';

const Stack = createStackNavigator();
/**
 *
 * @param {{}} colors
 */
const screenOptionStyle = (colors) => {
  return {
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: colors.background,
    },
    // headerTintColor: 'white',
    // headerBackTitle: 'Back',
  };
};
/**
 *
 * @param {{}} colors
 */
const optionStyle = (colors) => {
  return {
    headerTitle: (props) => <HeaderNavigator {...props} />,
    headerRight: (props) => (
      <IconButton
        icon="cast"
        color={colors.colors.primary}
        size={20}
        onPress={() => {}}
      />
    ),
    headerTitleAlign: 'left',
  };
};
/**
 *
 */
const MainStackNavigator = () => {
  const colors = useTheme();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle(colors)}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={optionStyle(colors)}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Search Recipes"
        component={SearchRecipes}
        options={optionStyle(colors)}
      />
      <Stack.Screen
        name="Search Results"
        component={SearchResults}
        options={optionStyle(colors)}
      />
      <Stack.Screen name="Redux Test" component={ReduxTest} />
    </Stack.Navigator>
  );
};
/**
 *
 */
const SavedRecipeStackNavigator = () => {
  const colors = useTheme();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle(colors)}>
      <Stack.Screen
        name="Saved Recipes"
        component={SavedRecipes}
        options={optionStyle(colors)}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SavedRecipeStackNavigator };
