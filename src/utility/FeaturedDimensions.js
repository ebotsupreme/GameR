import { Dimensions } from 'react-native';

const handleFeaturedWidth = () => {
  return Dimensions.get('window').width;
};

const HORIZONTAL_MARGIN = 5;
const FEATURED_ITEM_WIDTH = handleFeaturedWidth() + HORIZONTAL_MARGIN * 2;

export { handleFeaturedWidth, FEATURED_ITEM_WIDTH };
