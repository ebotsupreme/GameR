import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 *
 * @param {{}} props
 */
const CardImage = ({ item, width, height }) => {
  return (
    <>
      {item.image ? (
        <Image
          style={[styles.container, { width, height }]}
          source={{ uri: item.image }}
        />
      ) : (
        <View style={{ width, height }}>
          <View style={styles.imageUnavailable}>
            <Icon size={100} name="image" color="grey" />
          </View>
        </View>
      )}
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.4)',
        ]}
        style={[styles.linearGradient, { width, height }]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  linearGradient: {
    position: 'absolute',
    borderRadius: 10,
  },
  imageUnavailable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardImage;
