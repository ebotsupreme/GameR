import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeedByTitle } from '../features/mealFeed/index';

/**
 *
 * @param {{}} navigation
 */
const SearchResults = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { isLoading, mealFeed } = useSelector((state) => state.mealFeed);
  const itemTitle = route.params;
  console.log('Search Results Screen mealFeed', mealFeed);
  /**
   * this will need to handle the searched image results
   * of either the searched recipe OR searched meal type / category
   */

  useEffect(() => {
    if (itemTitle) {
      dispatch(handleFetchMealFeedByTitle(itemTitle));
    }
  }, [dispatch, itemTitle]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={fonts.light}>Search Results Screen</Text>
    </View>
  );
};

export default SearchResults;
