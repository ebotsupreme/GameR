import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchSearchResultById } from '../features/searchResult/index';
import { handleDisplayFeedImageSrc, handleWindowWidth } from '../utility/index';
import ListDetails from '../common/components/DataTable';
import { SkeletonCard } from '../common/components/index';

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
  const { searchResult, isSearchResultLoaded } = useSelector(
    (state) => state.searchResult,
  );
  const { searchResultPayload } = searchResult ? searchResult : [];

  useEffect(() => {
    dispatch(handleFetchSearchResultById(id));
  }, [dispatch, id]);

  // if (isSearchResultLoaded) {
  //   console.log(
  //     'searchResultPayload',
  //     JSON.stringify(searchResultPayload, null, 4),
  //   );
  // }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {isSearchResultLoaded ? (
            <>
              <Text style={styles.title}>{searchResult.title}</Text>
            </>
          ) : (
            <SkeletonCard
              width={WIDTH - 30}
              height={HEIGHT / 9}
              screen="Details"
              horizontalMargin={15}
              paddingTop={10}
              paddingBottom={5}
              marginTop={10}
              marginBottom={5}
            />
          )}
          {isSearchResultLoaded ? (
            <View style={styles.subTitle}>
              <Text
                style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
                Ready in: {searchResult.readyInMinutes} mins
              </Text>
              <Text
                style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
                Likes: {searchResult.aggregateLikes}
              </Text>
            </View>
          ) : (
            <View style={styles.subTitle}>
              <SkeletonCard
                width={WIDTH / 3 + 6}
                height={HEIGHT / 12}
                screen="Details"
                horizontalMargin={15}
                marginTop={15}
                marginBottom={15}
              />
              <SkeletonCard
                width={WIDTH / 5 + 8}
                height={HEIGHT / 12}
                screen="Details"
                horizontalMargin={15}
                marginTop={15}
                marginBottom={15}
              />
            </View>
          )}
        </View>
        <View>
          {isSearchResultLoaded ? (
            <Image
              style={{ width: WIDTH, height: HEIGHT }}
              source={
                searchResult.image &&
                handleDisplayFeedImageSrc(type, item, searchResult.image)
              }
            />
          ) : (
            <SkeletonCard
              width={WIDTH}
              height={HEIGHT}
              screen="Details"
              marginHorizontal={15}
              borderRadius={0}
            />
          )}
        </View>
        <View>
          {/* indredients */}
          <ListDetails
            details={isSearchResultLoaded ? searchResult : []}
            ingredients="Ingredients"
            nutrients="Nutrients"
            width={WIDTH}
            height={HEIGHT}
          />
        </View>
        <View>
          {/* Nutrients */}
          {/* <ListDetails
            details={isSearchResultLoaded ? searchResult : []}
            detailType={'Nutrients'}
            width={WIDTH}
            height={HEIGHT}
          /> */}
        </View>
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
