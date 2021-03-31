import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { handleSearchResultItemWidth } from '../utility/index';

/**
 *
 * @param {{}} item
 */
const MealFeed = ({ item }) => {
  const WIDTH = handleSearchResultItemWidth();
  const HEIGHT = WIDTH;

  return (
    <TouchableOpacity
      style={[styles.container, { width: WIDTH - 10, height: HEIGHT - 10 }]}>
      <Image
        style={[styles.image, { width: WIDTH - 10, height: HEIGHT - 10 }]}
        source={{ uri: item.image }}
      />
      <View style={[styles.titleContainer, { maxWidth: WIDTH - 25 }]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
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
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default MealFeed;
