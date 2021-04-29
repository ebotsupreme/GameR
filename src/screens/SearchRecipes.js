import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { handleNavigateToScreen } from '../navigation/index';

/**
 *
 * @param {{}} props
 */
const SearchRecipes = ({ navigation }) => {
  const { fonts } = useTheme();

  /**
   * this will need to handle the search for feed
   * and the search for saved recipes
   */
  return (
    <View style={styles.container}>
      <Text style={fonts.light}>Search Recipes Screen</Text>
      <Button
        onPress={() =>
          handleNavigateToScreen('search', navigation, {}, 'Search Results')
        }
        title="Search Results"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // remove later
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default SearchRecipes;
