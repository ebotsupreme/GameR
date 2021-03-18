import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';

import { handleFetchRecentFeed } from './index';

const RecentFeedList = () => {
  const dispatch = useDispatch();
  console.log('dispatch', dispatch);
  console.log('handleFetchRecentFeed', handleFetchRecentFeed);
  const { isLoading, recentFeed } = useSelector((state) => state.recentFeed);
  console.log('isLoading', isLoading);
  console.log('recentFeed', recentFeed);

  useEffect(() => {
    dispatch(handleFetchRecentFeed);
  }, [dispatch]);

  return (
    <View>
      <Text>Start.</Text>
      {isLoading ? <Text>Loading...</Text> : <Text>Recent Feed: </Text>}
    </View>
  );
};

export default RecentFeedList;
