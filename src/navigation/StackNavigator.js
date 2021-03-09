import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  headerRight: (props) => (
    /**
     * TODO add react native paper and make this an icon
     */
    <Button
      onPress={() => alert('This is a button!')}
      title="Chrome Cast"
      color="#35b9c0"
    />
  ),
  headerTitleAlign: 'left',
};

const MainStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen name="Feed" component={Feed} options={optionStyle} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

const SavedRecipeStackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Screen
      name="Saved Recipes"
      component={SavedRecipes}
      options={optionStyle}
    />
  </Stack.Navigator>
);

export { MainStackNavigator, SavedRecipeStackNavigator };
