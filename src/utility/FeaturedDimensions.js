import { Dimensions } from 'react-native';

/**
 *
 */
const handleFeaturedWidth = () => {
  return Dimensions.get('window').width;
};

export { handleFeaturedWidth };
