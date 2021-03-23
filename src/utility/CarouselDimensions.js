import { Dimensions } from 'react-native';

/**
 *
 */
const handleCarouselWidth = () => {
  return Dimensions.get('window').width;
};
/**
 *
 */
const handleItemWidthAndHeight = () => {
  const carouselWidth = handleCarouselWidth();
  return Math.round(carouselWidth * 0.33);
};
/**
 *
 */
const HORIZONTAL_MARGIN = 5;
const ITEM_WIDTH = handleItemWidthAndHeight() + HORIZONTAL_MARGIN * 2;

export {
  handleCarouselWidth,
  handleItemWidthAndHeight,
  HORIZONTAL_MARGIN,
  ITEM_WIDTH,
};
