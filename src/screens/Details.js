import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchSearchResultById } from '../features/searchResult/index';
import { handleDisplayFeedImageSrc, handleWindowWidth } from '../utility/index';
import ListDetails from '../common/components/DataTable';

/**
 *
 * @param {{}} props
 */
const Details = ({ navigation, route }) => {
  const { fonts } = useTheme();
  const dispatch = useDispatch();
  const type = true;
  const item = '';
  const WIDTH = handleWindowWidth();
  const HEIGHT = WIDTH;
  const { id, screen } = route.params;
  const { searchResult } = useSelector((state) => state.searchResult);
  const searchResultPayload = searchResult ? searchResult : [];

  useEffect(() => {
    dispatch(handleFetchSearchResultById(id));
  }, [dispatch, id]);

  if (searchResultPayload) {
    // console.log(
    //   'searchResultPayload',
    //   JSON.stringify(searchResultPayload, null, 4),
    // );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>{searchResultPayload.title}</Text>
          <View style={styles.subTitle}>
            <Text
              style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
              Ready in: {searchResultPayload.readyInMinutes} mins
            </Text>
            <Text
              style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
              Likes: {searchResultPayload.aggregateLikes}
            </Text>
          </View>
        </View>
        <View>
          <Image
            style={{ width: WIDTH, height: HEIGHT }}
            source={
              searchResultPayload.image &&
              handleDisplayFeedImageSrc(type, item, searchResultPayload.image)
            }
          />
        </View>
        <View>
          {/* indredients */}
          <ListDetails />
        </View>
        <View>{/* Nutrients */}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontFamily: 'AirbnbCerealApp-Bold',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  readyIn: {
    fontSize: 20,
    paddingBottom: 15,
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
});

export default Details;
