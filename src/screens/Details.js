import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchPopularFeed } from '../features/popularFeed/index';

/**
 *
 * @param {{}} navigation
 */
const Details = (props) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { navigation, route } = props;
  const itemId = route.params;
  const { isLoading, popularFeed } = useSelector((state) => state.popularFeed);

  /**
   *
   */
  const onRecipeDetails = () => {
    return popularFeed.find((feed) => feed.id === itemId);
  };

  useEffect(() => {
    dispatch(handleFetchPopularFeed);
  }, [dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
        <Text style={fonts.light}>
          Details Screen: {JSON.stringify(onRecipeDetails(), null, 2)}
        </Text>
      </ScrollView>
    </View>
  );
};

export default Details;
