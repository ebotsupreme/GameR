import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import {
  handleItemWidthAndHeight,
  HORIZONTAL_MARGIN,
  ITEM_WIDTH,
} from '../../utility/index';
import { CardImage, CardMeta } from './index';
import SkeletonCard from './SkeletonCard';

/**
 *
 * @param {{}} props
 */
const FeedCard = ({
  item,
  navigation,
  isLoadingPopularFeed,
  isLoadingHealthyFeed,
  type = '',
  screen = '',
}) => {
  if (type) {
    item = item.item;
  }
  const WIDTH = handleItemWidthAndHeight();
  const HEIGHT = WIDTH;
  /**
   *
   */
  const onPressableScreen = () => {
    if (type === 'multi') {
      return navigation.navigate('Search Results', {
        title: item.title,
        screen,
      });
    }
    return navigation.navigate('Details', { id: item.id, screen });
  };

  if (isLoadingPopularFeed || isLoadingHealthyFeed || item === undefined) {
    return <SkeletonCard width={0} height={0} />;
  }

  return (
    <View
      style={
        (styles.container,
        {
          width: ITEM_WIDTH,
          height: HEIGHT,
          paddingHorizontal: HORIZONTAL_MARGIN,
        })
      }>
      <View
        style={{
          width: WIDTH,
        }}>
        <Pressable
          onPress={() => onPressableScreen()}
          style={{ width: WIDTH, height: HEIGHT }}>
          <CardImage {...{ item, width: WIDTH, height: HEIGHT, type }} />
          <CardMeta {...{ item, width: WIDTH, height: HEIGHT, type }} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    position: 'relative',
    borderRadius: 10,
  },
});

export default FeedCard;
