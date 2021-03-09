import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/chefLogo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Logo;
