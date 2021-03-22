import { Dimensions } from 'react-native';

const handleCarouselWidth = () => {
  return Dimensions.get('window').width;
};

const handleItemWidthAndHeight = () => {
  const carouselWidth = handleCarouselWidth();
  return Math.round(carouselWidth * 0.33);
};

export { handleCarouselWidth, handleItemWidthAndHeight };
