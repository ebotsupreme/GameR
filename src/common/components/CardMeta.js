import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} props
 */
const CardMeta = (props) => {
  const { item } = props;
  const { fonts } = useTheme();
  // console.log('cardMeta item', JSON.stringify(item, null, 2));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
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
    fontSize: 14,
    color: '#FFF',
  },
});

export default CardMeta;
