import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import FeedCarousel from '../common/components/FeedCarousel';
import { FeedCard } from '../common/components/index';
import { mealTypes } from '../json/meal/index';
import { cuisineTypes } from '../json/cuisine/index';
import { handleFetchPopularFeed } from '../features/popularFeed/index';
import { handleFetchHealthyFeed } from '../features/healthyFeed/index';
import { handleFetchRandomFeed } from '../features/randomFeed/index';
import { handleFetchFeaturedFeed } from '../features/featuredFeed/index';
import { handleSearchResultFeedPlaceholder } from '../utility/index';
import { SearchResults } from '../screens/index';
import VirtualizedView from '../common/components/VirtualizedView';

/**
 *
 * @param {{}} props
 */
const Feed = ({ navigation }, props) => {
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const {
    isLoadingPopularFeed,
    isPopularFeedLoaded,
    popularFeed,
  } = useSelector((state) => state.popularFeed);
  const {
    isLoadingHealthyFeed,
    isHealthyFeedLoaded,
    healthyFeed,
  } = useSelector((state) => state.healthyFeed);
  const { isRandomFeedLoaded, randomFeed } = useSelector(
    (state) => state.randomFeed,
  );
  const {
    isLoadingFeaturedFeed,
    isFeaturedFeedLoaded,
    featuredFeed,
  } = useSelector((state) => state.featuredFeed);

  useEffect(() => {
    dispatch(handleFetchPopularFeed);
    dispatch(handleFetchHealthyFeed);
    dispatch(handleFetchRandomFeed);
    dispatch(handleFetchFeaturedFeed);
  }, [dispatch]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background, paddingTop: 10 },
      ]}>
      <VirtualizedView {...props}>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={[
              styles.feedTitle,
              { color: colors.accent, paddingHorizontal: 5 },
            ]}>
            Featured
          </Text>
          <FeedCard
            {...{ navigation, isLoadingFeaturedFeed }}
            item={isFeaturedFeedLoaded ? featuredFeed : {}}
            screen="featuredFeed"
          />
        </View>
        <View>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Popular
          </Text>
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
          <Text style={[styles.feedTitle, { color: colors.accent }]}>Meal</Text>
          <FeedCarousel
            data={mealTypes ? mealTypes : handleSearchResultFeedPlaceholder()}
            renderItemComponent={(item) => (
              <FeedCard
                {...{ item, navigation }}
                type="multi"
                screen="mealFeed"
              />
            )}
          />
        </View>
        <View>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Cuisine
          </Text>
          <FeedCarousel
            data={
              cuisineTypes ? cuisineTypes : handleSearchResultFeedPlaceholder()
            }
            renderItemComponent={(item) => (
              <FeedCard
                {...{ item, navigation }}
                type="multi"
                screen="cuisineFeed"
              />
            )}
          />
        </View>
        <View>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Healthy
          </Text>
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
          <Text
            style={[
              styles.feedTitle,
              { color: colors.accent, marginVertical: 0 },
            ]}>
            Random
          </Text>
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
