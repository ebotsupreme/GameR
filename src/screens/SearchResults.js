import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeedByTitle } from '../features/mealFeed/index';
import { MealFeed } from './index';
import { SearchResultSkeletonCard } from '../common/components/index';
import { handleSearchResultFeedPlaceholder } from '../utility/index';

/**
 *
 * @param {{}} navigation
 */
const SearchResults = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { mealFeed, isDataLoaded } = useSelector((state) => state.mealFeed);
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

  const renderPlaceholder = () => (
    <SearchResultSkeletonCard width={0} height={0} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={
          isDataLoaded ? mealFeed.results : handleSearchResultFeedPlaceholder()
        }
        renderItem={isDataLoaded ? renderMealFeed : renderPlaceholder}
        keyExtractor={(item) =>
          isDataLoaded ? item.id.toString() : item.toString()
        }
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  },
});

export default SearchResults;
