import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { handleFetchHealthyFeed } from '../features/healthyFeed';

import { handleFetchPopularFeed } from '../features/popularFeed/index';
import { handleFetchSearchResultById } from '../features/searchResult/index';

/**
 *
 * @param {{}} props
 */
const Details = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { id, screen } = route.params;
  const { isLoading, popularFeed } = useSelector((state) => state.popularFeed);
  const { searchResult } = useSelector((state) => state.searchResult);

  const popularFeedPayload = popularFeed
    ? popularFeed.find((feed) => feed.id === id)
    : [];
  const searchResultPayload = searchResult ? searchResult : [];

  useEffect(() => {
    onRecipeDetails();
  }, [dispatch, id, screen]);

  /**
   *
   */
  const onRecipeDetails = () => {
    switch (screen) {
      case 'popularFeed':
        dispatch(handleFetchPopularFeed);
        break;
      case 'mealFeed':
        dispatch(handleFetchSearchResultById(id));
        break;
      case 'cuisineFeed':
        dispatch(handleFetchSearchResultById(id));
        break;
      case 'healthyFeed':
        dispatch(handleFetchSearchResultById(id));
        break;
    }
  };

  if (searchResultPayload) {
    console.log('searchResultPayload', searchResultPayload);
  }
  if (popularFeedPayload) {
    console.log('popularFeedPayload', popularFeedPayload);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Text style={fonts.light}>Details Screen: {feedDetails()}</Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;
