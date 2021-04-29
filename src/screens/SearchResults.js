import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';

import {
  useFetchMealFeedByTitle,
  useFetchCuisineFeedByTitle,
} from '../functions/Feed/index';
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
  const { title, screen } = route ? route.params : {};
  /**
   *
   */
  const { cuisineFeed, isCuisineFeedLoaded } = useFetchCuisineFeedByTitle(
    title,
    screen,
  );
  /**
   *
   */
  const { mealFeed, isMealFeedLoaded } = useFetchMealFeedByTitle(title, screen);

  /**
   * NOTE: this will need to handle the searched image results
   * of either the searched recipe OR searched meal type / category
   */

  /**
   *
   * @param {string} feedName
   */
  const renderFLatListData = (feedName) => {
    switch (feedName) {
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
   * @param {string} feedName
   */
  const renderFeedLoadedState = (feedName = '', feedRandom = '') => {
    switch (feedName ? feedName : feedRandom) {
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
