import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

const searchRecipes = ({ navigation }) => {
  const { fonts } = useTheme();

  /**
   * this will need to handle the search for feed
   * and the search for saved recipes
   */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Search Recipes Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
    </View>
  );
};

export default searchRecipes;
