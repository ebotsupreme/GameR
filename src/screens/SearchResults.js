import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useTheme } from 'react-native-paper';

import {
  useFetchMealFeedByTitle,
  useFetchCuisineFeedByTitle,
} from '../functions/Feed/index';
import {
  handleRenderFLatListData,
  handleRenderFeedLoadedState,
} from '../functions/searchResult/index';
import { SearchResultFeed } from './index';
import { SearchResultSkeletonCard } from '../common/components/index';

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
    <SafeAreaView style={[styles.container, screenType && styles.paddingZero]}>
      <FlatList
        data={
          screenType
            ? handleRenderFLatListData(
                screenType,
                isMealFeedLoaded,
                mealFeed,
                isCuisineFeedLoaded,
                cuisineFeed,
                isRandomFeedLoaded,
                randomFeed,
              )
            : handleRenderFLatListData(
                screen,
                isMealFeedLoaded,
                mealFeed,
                isCuisineFeedLoaded,
                cuisineFeed,
                isRandomFeedLoaded,
                randomFeed,
              )
        }
        renderItem={
          handleRenderFeedLoadedState(
            screen,
            screenType,
            isMealFeedLoaded,
            isCuisineFeedLoaded,
            isRandomFeedLoaded,
          )
            ? renderSearchResultFeed
            : renderPlaceholder
        }
        keyExtractor={(item) =>
          handleRenderFeedLoadedState(
            screen,
            screenType,
            isMealFeedLoaded,
            isCuisineFeedLoaded,
            isRandomFeedLoaded,
          )
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
  paddingZero: {
    padding: 0,
  },
});

export default SearchResults;
