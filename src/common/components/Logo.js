import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/chefLogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});

export default Logo;
