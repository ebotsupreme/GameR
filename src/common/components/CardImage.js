import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CardImage = (props) => {
  // console.log('cardImage props', JSON.stringify(props, null, 4));
  const { item, width, height } = props;

  return (
    <>
      {item.image ? (
        <Image
          style={[styles.container, { width, height }]}
          source={{ uri: item.image }}
        />
      ) : null}
      {/* TODO add image not found placeholder text/image here + linear gradient */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
});

export default CardImage;
