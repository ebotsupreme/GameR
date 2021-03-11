import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search Recipes');

  const navigation = useNavigation();
  const onChangeSearch = (query) => setSearchQuery(query);

  const onFocusSearch = () => {
    console.log('onFocusSearch navigation', navigation);
    navigation.navigate('Search Recipes');
  };

  return (
    <Searchbar
      placeholder={searchPlaceholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
      inputStyle={styles.searchInput}
      textAlign={'center'}
      onFocus={() => onFocusSearch()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: 'transparent',
    elevation: 0,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginLeft: 10,
  },
  searchInput: {
    paddingVertical: 0,
    fontSize: 16,
  },
});

export default Search;
