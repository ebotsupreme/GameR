import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search Recipes');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: Platform.OS === 'ios' ? 35 : 'auto',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: 'transparent',
    elevation: 0,
    alignItems: 'center',
  },
});

export default Search;
