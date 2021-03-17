import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const FeedCard = (props) => {
  const { item, navigation } = props;
  return (
    <View
      style={{
        backgroundColor: 'floralwhite',
        borderRadius: 5,
        height: 150,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={{ fontSize: 16 }}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedCard;
