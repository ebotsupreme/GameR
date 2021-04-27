import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import FeedCarousel from '../common/components/FeedCarousel';
import { FeedCard } from '../common/components/index';
import {
  useFetchPopularFeed,
  useFetchMealFeed,
  useFetchCuisineFeed,
  useFetchHealthyFeed,
  useFetchRandomFeed,
  useFetchFeaturedFeed,
  useRefreshControl,
} from '../functions/Feed/index';
import {
  handleSearchResultFeedPlaceholder,
  WIDTH,
  HEIGHT,
} from '../utility/index';
import { SearchResults } from '../screens/index';
import VirtualizedView from '../common/components/VirtualizedView';
import { SkeletonCard } from '../common/components/index';

/**
 *
 * @param {{}} props
 */
const Feed = ({ navigation }, props) => {
  const { colors, fonts } = useTheme();
  const { refreshing, onRefresh } = useRefreshControl();
  /**
   *
   */
  const {
    isLoadingFeaturedFeed,
    isFeaturedFeedLoaded,
    featuredFeed,
  } = useFetchFeaturedFeed();
  /**
   *
   */
  const {
    isLoadingPopularFeed,
    isPopularFeedLoaded,
    popularFeed,
  } = useFetchPopularFeed();
  /**
   *
   */
  const { isLoadingMealFeed, isMealFeedLoaded, mealType } = useFetchMealFeed();
  /**
   *
   */
  const {
    isLoadingCuisineFeed,
    isCuisineFeedLoaded,
    cuisineType,
  } = useFetchCuisineFeed();
  /**
   *
   */
  const {
    isLoadingHealthyFeed,
    isHealthyFeedLoaded,
    healthyFeed,
  } = useFetchHealthyFeed();
  /**
   *
   */
  const { isRandomFeedLoaded, randomFeed } = useFetchRandomFeed();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, paddingTop: 10 },
      ]}>
      <VirtualizedView {...props} onRefresh={onRefresh} refreshing={refreshing}>
        <View style={{ paddingHorizontal: 10 }}>
          {isFeaturedFeedLoaded ? (
            <Text
              style={[
                styles.feedTitle,
                { color: colors.accent, paddingHorizontal: 5 },
              ]}>
              Featured
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={5}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <FeedCard
            {...{ navigation, isLoadingFeaturedFeed }}
            item={isFeaturedFeedLoaded ? featuredFeed : {}}
            screen="featuredFeed"
          />
        </View>
        <View>
          {isPopularFeedLoaded ? (
            <Text style={[styles.feedTitle, { color: colors.accent }]}>
              Popular
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <FeedCarousel
            data={
              isPopularFeedLoaded
                ? popularFeed
                : handleSearchResultFeedPlaceholder()
            }
            renderItemComponent={(item) => (
              <FeedCard
                {...{ ...item, navigation, isLoadingPopularFeed }}
                screen="popularFeed"
              />
            )}
          />
        </View>
        <View>
          {isMealFeedLoaded ? (
            <Text style={[styles.feedTitle, { color: colors.accent }]}>
              Meal
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <FeedCarousel
            data={
              isMealFeedLoaded ? mealType : handleSearchResultFeedPlaceholder()
            }
            renderItemComponent={(item) => (
              <FeedCard
                {...{ item, navigation, isLoadingMealFeed }}
                type="multi"
                screen="mealFeed"
              />
            )}
          />
        </View>
        <View>
          {isCuisineFeedLoaded ? (
            <Text style={[styles.feedTitle, { color: colors.accent }]}>
              Cuisine
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <FeedCarousel
            data={
              isCuisineFeedLoaded
                ? cuisineType
                : handleSearchResultFeedPlaceholder()
            }
            renderItemComponent={(item) => (
              <FeedCard
                {...{ item, navigation, isLoadingCuisineFeed }}
                type="multi"
                screen="cuisineFeed"
              />
            )}
          />
        </View>
        <View>
          {isHealthyFeedLoaded ? (
            <Text style={[styles.feedTitle, { color: colors.accent }]}>
              Healthy
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <FeedCarousel
            data={
              isHealthyFeedLoaded
                ? healthyFeed
                : handleSearchResultFeedPlaceholder()
            }
            renderItemComponent={(item) => (
              <FeedCard
                {...{ item, navigation, isLoadingHealthyFeed }}
                type
                screen="healthyFeed"
              />
            )}
          />
        </View>
        <View>
          {isRandomFeedLoaded ? (
            <Text
              style={[
                styles.feedTitle,
                { color: colors.accent, marginVertical: 0 },
              ]}>
              Random
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <SearchResults
            {...{ navigation, isRandomFeedLoaded, randomFeed }}
            screenType="random"
          />
        </View>
        {/* { TODO: enable later for db & authentication
          <Button
          onPress={() => navigation.navigate('Redux Test')}
          title="Redux Test"
        />
        } */}
        <View style={{ paddingBottom: 15 }} />
      </VirtualizedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  feedContainer: {
    height: 100,
  },
  feedTitle: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 20,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 12,
  },
});

export default Feed;
