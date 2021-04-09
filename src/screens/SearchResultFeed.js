import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { handleSearchResultItemWidth } from '../utility/index';
import { searchGradientColors } from '../styles/index';

/**
 *
 * @param {{}} props
 */
const SearchResultFeed = ({
  item,
  navigation,
  screen = '',
  screenType = '',
}) => {
  const WIDTH = handleSearchResultItemWidth();
  const HEIGHT = WIDTH;
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate('Details', { id: item.id, screen })}
        style={[
          styles.container,
          { width: WIDTH - 10, height: HEIGHT - 10 },
          screenType && { margin: 0 },
        ]}>
        {item.image ? (
          <Image
            style={[styles.image, { width: WIDTH - 10, height: HEIGHT - 10 }]}
            source={{ uri: item.image }}
          />
        ) : (
          <View style={{ width: WIDTH - 10, height: HEIGHT - 10 }}>
            <View styles={styles.imageUnavailable}>
              <Icon size={100} name="image" color="grey" />
            </View>
          </View>
        )}
        <LinearGradient
          colors={searchGradientColors}
          style={[
            styles.linearGradient,
            {
              width: WIDTH - 10,
              height: HEIGHT - 10,
            },
          ]}>
          <View style={[styles.titleContainer, { maxWidth: WIDTH - 25 }]}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </LinearGradient>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginHorizontal: 7,
    marginVertical: 10,
  },
  image: {
    borderRadius: 10,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    fontFamily: 'AirbnbCerealApp-Black',
    color: '#FFF',
    fontSize: 16,
  },
  imageUnavailable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    borderRadius: 10,
  },
});

export default SearchResultFeed;
