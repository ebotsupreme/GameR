import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../screens/Feed';
import Details from '../screens/Details';
import Logo from '../common/components/Logo';
import SavedRecipes from '../screens/SavedRecipes';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#FFF',
  },
  // headerTintColor: 'white',
  // headerBackTitle: 'Back',
};

const optionStyle = {
  headerTitle: (props) => <Logo {...props} />,
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Sign In"
      color="#FF7900"
    />
  ),
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Feed" component={Feed} options={optionStyle} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const SavedRecipeStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Saved Recipes" component={SavedRecipes} />
  </Stack.Navigator>
);

export { MainStackNavigator, SavedRecipeStackNavigator };
