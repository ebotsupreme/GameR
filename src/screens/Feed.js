import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';

import FeedCarousel from '../common/components/FeedCarousel';
import PopularRecipesFeedData from '../json/popularRecipesFeed.json';

/**
 *
 * @param {{}} navigation
 */
const Feed = ({ navigation }) => {
  const { colors, fonts } = useTheme();
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
          <FeedCarousel data={PopularRecipesFeedData} />
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
