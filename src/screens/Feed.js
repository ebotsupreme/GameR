import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import FeedCarousel from '../common/components/FeedCarousel';
import { handleFetchPopularFeed } from '../features/popularFeed/index';
import { FeedCard } from '../common/components/index';
import { mealTypes } from '../json/meal/index';
import { handleSearchResultFeedPlaceholder } from '../utility/index';

/**
 *
 * @param {{}} navigation
 */
const Feed = ({ navigation }) => {
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const {
    isLoadingPopularFeed,
    popularFeed,
    isPopularFeedLoaded,
  } = useSelector((state) => state.popularFeed);
  const { isLoadingMealFeed, isMealFeedLoaded } = useSelector(
    (state) => state.mealFeed,
  );

  useEffect(() => {
    dispatch(handleFetchPopularFeed);
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
          {/* NOTE: Meal feed has no loading state, so it is temporary using
              the popularFeed loading state. The existing placeholder does not
              cover the card meta text */}
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
        <View style={styles.feedContainer}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Category
          </Text>
        </View>
        <View style={styles.feedContainer}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Seasonal / Holiday
          </Text>
        </View>
        <View style={styles.feedContainer}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Healthy
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Recent
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
