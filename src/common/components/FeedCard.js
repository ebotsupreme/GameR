import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';

import { handleItemWidthAndHeight } from '../../utility/index';
import { CardImage, CardMeta } from './index';

const FeedCard = (props) => {
  const { item, navigation } = props;
  const WIDTH = handleItemWidthAndHeight();
  const HEIGHT = WIDTH;

  const horizontalMargin = 5;
  const slideWidth = WIDTH;
  const sliderWidth = Dimensions.get('window').width;
  const itemWidth = slideWidth + horizontalMargin * 2;
  const itemHeight = HEIGHT;

  // console.log('FEED CARD PROPS', JSON.stringify(props, null, 4));
  return (
    <View
      style={[
        styles.container,
        {
          width: itemWidth,
          height: itemHeight,
          paddingHorizontal: horizontalMargin,
        },
      ]}>
      <View
        style={{
          width: slideWidth,
        }}>
        <Pressable
          onPress={() => navigation.navigate('Details', item.id)}
          style={{ width: WIDTH, height: HEIGHT }}>
          <CardImage {...{ ...props, width: WIDTH, height: HEIGHT }} />
          <CardMeta {...{ ...props, width: WIDTH, height: HEIGHT }} />
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
