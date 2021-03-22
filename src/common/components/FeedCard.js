import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { ItemWidthAndHeight } from '../../utility/index';
import { CardImage, CardMeta } from './index';

const FeedCard = (props) => {
  const { item, navigation } = props;
  const WIDTH = ItemWidthAndHeight();
  const HEIGHT = WIDTH;

  // console.log('FEED CARD PROPS', JSON.stringify(props, null, 4));
  return (
    <View style={[styles.container, { width: WIDTH, height: HEIGHT }]}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', item.id)}>
        <CardImage {...{ ...props, width: WIDTH, height: HEIGHT }} />
        {/* Card Meta content s.a. title */}
        <CardMeta {...{ ...props, width: WIDTH, height: HEIGHT }} />
        {/* <Text style={{ fontSize: 16 }}>{item.title}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    position: 'relative',
    borderRadius: 10,
  },
});

export default FeedCard;
