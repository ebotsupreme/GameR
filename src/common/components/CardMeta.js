import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} props
 */
const CardMeta = ({ item, type = '', screen = '', width }) => {
  const { fonts } = useTheme();
  return (
    <View
      style={[
        styles.container,
        screen === 'featuredFeed' && { maxWidth: width - 40 },
      ]}>
      <Text
        style={[styles.title, screen === 'featuredFeed' && { fontSize: 24 }]}>
        {item.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 125,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    fontFamily: 'AirbnbCerealApp-Black',
    fontSize: 16,
    color: '#FFF',
  },
});

export default CardMeta;
