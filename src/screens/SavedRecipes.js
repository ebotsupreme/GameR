import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 */
const SavedRecipes = () => {
  const { fonts } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>My Saved Recipes Screen</Text>
    </View>
  );
};

export default SavedRecipes;
