import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useFetchSearchResultById } from '../../functions/searchResult/index';
import {
  handleDisplayFeedImageSrc,
  handleWindowWidth,
  handleSearchResultFeedPlaceholder,
} from '../../utility/index';
import { SkeletonCard } from '../../common/components/index';
import { ListDetails, Preparation } from './components/index';
import { useFetchRelatedFeed } from '../../functions/Feed/index';
import { FeedCarousel, FeedCard } from '../../common/components/index';

/**
 *
 * @param {{}} props
 */
const Details = ({ navigation, route }) => {
  const { colors, fonts } = useTheme();
  const type = true;
  const item = '';
  const WIDTH = handleWindowWidth();
  const HEIGHT = WIDTH;
  const { id, screen } = route.params;

  /**
   *
   */
  const { searchResult, isSearchResultLoaded } = useFetchSearchResultById(id);
  /**
   *
   */
  const {
    isLoadingRelatedFeed,
    isRelatedFeedLoaded,
    relatedFeed,
  } = useFetchRelatedFeed(id);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {isSearchResultLoaded ? (
            <>
              <Text style={[styles.title, { color: colors.accent }]}>
                {searchResult.title}
              </Text>
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
                Score:{' '}
                <Text style={styles.scoreAndLikes}>
                  {searchResult.spoonacularScore}
                </Text>
              </Text>
              <Text
                style={[fonts.light, styles.readyIn, styles.paddingHorizontal]}>
                Likes:{' '}
                <Text style={styles.scoreAndLikes}>
                  {searchResult.aggregateLikes}
                </Text>
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
                d
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
          <ListDetails
            details={isSearchResultLoaded ? searchResult : []}
            ingredients="Ingredients"
            nutrients="Nutrients"
            width={WIDTH}
            height={HEIGHT}
          />
        </View>
        <View>
          {isRelatedFeedLoaded ? (
            <Text style={[styles.feedTitle, { color: colors.accent }]}>
              Related Recipes
            </Text>
          ) : (
            <SkeletonCard
              width={WIDTH / 4}
              height={HEIGHT / 4 / 4}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
          <View style={{ paddingBottom: 25 }}>
            <FeedCarousel
              data={
                isRelatedFeedLoaded
                  ? relatedFeed
                  : handleSearchResultFeedPlaceholder()
              }
              // eslint-disable-next-line no-shadow
              renderItemComponent={(item) => (
                <FeedCard
                  {...{ item, navigation, isLoadingRelatedFeed }}
                  type="related"
                  screen="Search Results"
                />
              )}
            />
          </View>
        </View>
        {/* Preparation component */}
        <View>
          {isSearchResultLoaded ? (
            <View style={styles.preparationHeaderView}>
              <Text style={[styles.feedTitle, { color: colors.accent }]}>
                Preparation
              </Text>
            </View>
          ) : (
            <SkeletonCard
              width={WIDTH / 4}
              height={HEIGHT / 4 / 4}
              horizontalMargin={15}
              screen="Feed"
              justifyContent={'flex-start'}
            />
          )}
        </View>
        <View>
          <Preparation
            details={isSearchResultLoaded ? searchResult : []}
            width={WIDTH}
            height={HEIGHT}
          />
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
  feedTitle: {
    fontFamily: 'AirbnbCerealApp-Bold',
    fontSize: 22,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 12,
  },
  scoreAndLikes: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 19,
    fontWeight: '600',
  },
  preparationHeaderView: {
    backgroundColor: '#f1f1f1',
    paddingTop: 5,
  },
});

export default Details;
