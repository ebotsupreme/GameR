import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import FeedCarousel from '../common/components/FeedCarousel';
import { handleFetchRecentFeed } from '../features/recentFeed/index';
import { FeedCard } from '../common/components/index';

/**
 *
 * @param {{}} navigation
 */
const Feed = (props) => {
  const { navigation } = props;
  const { colors, fonts } = useTheme();
  const dispatch = useDispatch();
  const { isLoading, recentFeed } = useSelector((state) => state.recentFeed);

  useEffect(() => {
    dispatch(handleFetchRecentFeed);
  }, [dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        {/* TODO WIP */}
        {/*<Button
            onPress={() => navigation.navigate('Redux Test')}
            title="Redux Test"
          /> */}
        <View>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>
            Popular
          </Text>
          <FeedCarousel
            data={recentFeed}
            renderItemComponent={(item) => (
              <FeedCard {...{ ...item, ...props }} />
            )}
          />
        </View>
        <View style={styles.feedContainer}>
          <Text style={[styles.feedTitle, { color: colors.accent }]}>Meal</Text>
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
  feedContainer: {
    height: 100,
  },
  feedTitle: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Feed;
