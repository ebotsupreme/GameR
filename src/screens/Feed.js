import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import FeedCarousel from '../common/components/FeedCarousel';
import { FeedCard } from '../common/components/index';
import { mealTypes } from '../json/meal/index';
import { cuisineTypes } from '../json/cuisine/index';
import { handleFetchPopularFeed } from '../features/popularFeed/index';
import { handleFetchHealthyFeed } from '../features/healthyFeed/index';
import { handleFetchRandomFeed } from '../features/randomFeed/randomFeedActions';
import { handleSearchResultFeedPlaceholder } from '../utility/index';

/**
 *
 * @param {{}} props
 */
const Feed = ({ navigation }) => {
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
  const { isLoadingRandomFeed, isRandomFeedLoaded, randomFeed } = useSelector(
    (state) => state.randomFeed,
  );

  useEffect(() => {
    dispatch(handleFetchPopularFeed);
    dispatch(handleFetchHealthyFeed);
    dispatch(handleFetchRandomFeed);
  }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
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
                type="single"
                screen="healthyFeed"
              />
            )}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Random
          </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('Redux Test')}
          title="Redux Test"
        />
      </ScrollView>
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
    fontSize: 18,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 12,
  },
});

export default Feed;
