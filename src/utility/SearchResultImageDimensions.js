import { Dimensions } from 'react-native';

/**
 *
 */
const handleSearchResultScreenWidth = () => {
  return Dimensions.get('window').width;
};
/**
 *
 */
const handleSearchResultItemWidth = () => {
  const screenWidth = handleSearchResultScreenWidth();
  return Math.round(screenWidth * 0.45);
};

export { handleSearchResultScreenWidth, handleSearchResultItemWidth };
