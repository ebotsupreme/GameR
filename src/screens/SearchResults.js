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
const SearchResults = ({
  navigation,
  route,
  screenType,
  isRandomFeedLoaded,
  randomFeed,
}) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { mealFeed, isMealFeedLoaded } = useSelector((state) => state.mealFeed);
  const { cuisineFeed, isCuisineFeedLoaded } = useSelector(
    (state) => state.cuisineFeed,
  );
  const { title, screen } = route ? route.params : {};
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
   * @param {string} screenName
   */
  const renderFLatListData = (screenName) => {
    switch (screenName) {
      case 'mealFeed':
        return isMealFeedLoaded
          ? mealFeed
          : handleSearchResultFeedPlaceholder();
      case 'cuisineFeed':
        return isCuisineFeedLoaded
          ? cuisineFeed
          : handleSearchResultFeedPlaceholder();
      case 'random':
        return isRandomFeedLoaded
          ? randomFeed
          : handleSearchResultFeedPlaceholder();
    }
  };
  /**
   *
   * @param {string} screenName
   */
  const renderFeedLoadedState = (screenName = '', randomScreen = '') => {
    switch (screenName ? screenName : randomScreen) {
      case 'mealFeed':
        return isMealFeedLoaded;
      case 'cuisineFeed':
        return isCuisineFeedLoaded;
      case 'random':
        return isRandomFeedLoaded;
    }
  };
  /**
   *
   * @param {{}} item
   */
  const renderSearchResultFeed = ({ item }) => (
    <SearchResultFeed {...{ item, navigation, screen, screenType }} />
  );
  /**
   *
   */
  const renderPlaceholder = () => (
    <SearchResultSkeletonCard width={0} height={0} />
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        screenType && { paddingVertical: 0, paddingHorizontal: 0 },
      ]}>
      <FlatList
        data={
          screenType
            ? renderFLatListData(screenType)
            : renderFLatListData(screen)
        }
        renderItem={
          renderFeedLoadedState(screen, screenType)
            ? renderSearchResultFeed
            : renderPlaceholder
        }
        keyExtractor={(item) =>
          renderFeedLoadedState(screen, screenType)
            ? item.id.toString()
            : item.toString()
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
