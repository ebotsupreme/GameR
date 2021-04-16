import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} props
 */
const SearchRecipes = ({ navigation }) => {
  const { fonts } = useTheme();

  /**
   *
   * @param {string} screen
   */
  const onNavigateToScreen = (screen) => {
    return navigation.navigate(screen, { title: '', screen });
  };

  /**
   * this will need to handle the search for feed
   * and the search for saved recipes
   */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Search Recipes Screen</Text>
      <Button
        onPress={() => onNavigateToScreen('Search Results')}
        title="Search Results"
      />
    </View>
  );
};

export default SearchRecipes;
