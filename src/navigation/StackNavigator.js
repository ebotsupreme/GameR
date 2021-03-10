import React from 'react';
import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';

import Feed from '../screens/Feed';
import Details from '../screens/Details';
import Logo from '../common/components/Logo';
import SavedRecipes from '../screens/SavedRecipes';

const Stack = createStackNavigator();

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

const optionStyle = (colors) => {
  return {
    headerTitle: (props) => <Logo {...props} />,
    headerRight: (props) => (
      /**
       * TODO add react native paper and make this an icon
       */
      <Button
        onPress={() => alert('This is a button!')}
        title="Chrome Cast"
        color="#35b9c0"
        // mode="outline"
        icon="cast"
      />
    ),
    headerTitleAlign: 'left',
  };
};

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
    </Stack.Navigator>
  );
};

const SavedRecipeStackNavigator = () => {
  const colors = useTheme();
  return (
    <Stack.Navigator screenOptions={screenOptionStyle(colors)}>
      <Stack.Screen
        name="Saved Recipes"
        component={SavedRecipes}
        options={optionStyle}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SavedRecipeStackNavigator };
