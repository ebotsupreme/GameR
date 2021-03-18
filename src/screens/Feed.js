import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import FeedCarousel from '../common/components/FeedCarousel';
import { handleFetchRecentFeed } from '../features/recentFeed/index';
import PopularRecipesFeedData from '../json/popularRecipesFeed.json';
import Feedcard, { FeedCard } from '../common/components/index';

/**
 *
 * @param {{}} navigation
 */
const Feed = (props) => {
  const { navigation } = props;
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const { isLoading, recentFeed } = useSelector((state) => state.recentFeed);

  console.log('FEED isLoading', isLoading);
  console.log('FEED recentFeed', recentFeed);

  // TODO temporarliy disabled
  // useEffect(() => {
  //   dispatch(handleFetchRecentFeed);
  // }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        {/* <Text style={fonts.light}>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Details" />
      <Button
        onPress={() => navigation.navigate('Redux Test')}
        title="Redux Test"
      /> */}
        <View style={{ height: 100 }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Popular
          </Text>
          <FeedCarousel
            data={PopularRecipesFeedData}
            {...props}
            renderItemComponent={(item) => (
              <FeedCard {...{ ...item, ...props }} />
            )}
          />
        </View>
        <View style={{ height: 100 }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>Meal</Text>
        </View>
        <View style={{ height: 100 }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Category
          </Text>
        </View>
        <View style={{ height: 100 }}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Seasonal / Holiday
          </Text>
        </View>
        <View style={{ height: 100 }}>
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
          onPress={() => navigation.navigate('Counter')}
          title="Counter"
        />
        <Button
          onPress={() => navigation.navigate('Recent Feed List')}
          title="Recent Feed List"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  feedTitle: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 16,
  },
});

export default Feed;
