import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Logo, Search } from '../common/components/index';

/**
 *
 * @param {{}} props
 */
const HeaderNavigator = (props) => (
  <View style={styles.container}>
    <Logo {...props} style={styles.flexOne} />
    <Search {...props} style={styles.flexOne} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flexOne: {
    flex: 1,
  },
});

export default HeaderNavigator;
