import React, { useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeedByTitle } from '../features/mealFeed/index';
import { handleFetchCuisineFeedByTitle } from '../features/cuisineFeed/index';
import { SearchResultFeed } from './index';
import { SearchResultSkeletonCard } from '../common/components/index';
import { handleSearchResultFeedPlaceholder } from '../utility/index';

/**
 *
 * @param {{}} props
 */
const SearchResults = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { mealFeed, isMealFeedLoaded } = useSelector((state) => state.mealFeed);
  const { cuisineFeed, isCuisineFeedLoaded } = useSelector(
    (state) => state.cuisineFeed,
  );
  const { title, screen } = route.params;
  /**
   * NOTE: this will need to handle the searched image results
   * of either the searched recipe OR searched meal type / category
   */
  useEffect(() => {
    if (title && screen === 'mealFeed') {
      dispatch(handleFetchMealFeedByTitle(title));
    }
    if (title && screen === 'cuisineFeed') {
      dispatch(handleFetchCuisineFeedByTitle(title));
    }
  }, [dispatch, title, screen]);
  /**
   *
   * @param {{}} item
   */
  const renderSearchResultFeed = ({ item }) => (
    <SearchResultFeed {...{ item, navigation, screen }} />
  );
  /**
   *
   */
  const renderPlaceholder = () => (
    <SearchResultSkeletonCard width={0} height={0} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={
          isMealFeedLoaded
            ? mealFeed.results
            : handleSearchResultFeedPlaceholder()
        }
        renderItem={
          isMealFeedLoaded ? renderSearchResultFeed : renderPlaceholder
        }
        keyExtractor={(item) =>
          isMealFeedLoaded ? item.id.toString() : item.toString()
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
