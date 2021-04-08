import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { handleFetchSearchResultById } from '../features/searchResult/index';

/**
 *
 * @param {{}} props
 */
const Details = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const { id, screen } = route.params;
  const { searchResult } = useSelector((state) => state.searchResult);
  const searchResultPayload = searchResult ? searchResult : [];

  useEffect(() => {
    dispatch(handleFetchSearchResultById(id));
  }, [dispatch, id]);

  if (searchResultPayload) {
    console.log('searchResultPayload', searchResultPayload);
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
