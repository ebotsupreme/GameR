import React from 'react';
import { View, Text, Button } from 'react-native';

const searchRecipes = ({ navigation }) => {
  /**
   * this will need to handle the search for feed
   * and the search for saved recipes
   */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Recipes Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
    </View>
  );
};

export default searchRecipes;
