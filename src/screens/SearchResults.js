import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} navigation
 */
const SearchResults = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const itemTitle = route.params;
  console.log('Search Results Screen', 'itemTitle', itemTitle);
  /**
   * this will need to handle the searched image results
   * of either the searched recipe OR searched meal type / category
   */
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Search Results Screen</Text>
    </View>
  );
};

export default SearchResults;
