import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 *
 * @param {{}} props
 */
const CardMeta = ({ item, type = '' }) => {
  const { fonts } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, type === 'multi' && { fontSize: 16 }]}>
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
    fontSize: 14,
    color: '#FFF',
  },
});

export default CardMeta;
