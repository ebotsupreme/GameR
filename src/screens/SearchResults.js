import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeedByTitle } from '../features/mealFeed/index';
import { MealFeed } from './index';

/**
 *
 * @param {{}} navigation
 */
const SearchResults = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { isLoading, mealFeed } = useSelector((state) => state.mealFeed);
  const itemTitle = route.params;
  /**
   * NOTE: this will need to handle the searched image results
   * of either the searched recipe OR searched meal type / category
   */

  useEffect(() => {
    if (itemTitle) {
      dispatch(handleFetchMealFeedByTitle(itemTitle));
    }
  }, [dispatch, itemTitle]);

  /**
   *
   * @param {{}} item
   */
  const renderMealFeed = ({ item }) => <MealFeed {...{ item }} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mealFeed.results}
        renderItem={renderMealFeed}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default SearchResults;
