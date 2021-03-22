import { useWindowDimensions } from 'react-native';

const CarouselWidth = () => {
  const carouselWidth = useWindowDimensions().width;
  return carouselWidth;
};

const ItemWidthAndHeight = () => {
  const carouselWidth = CarouselWidth();
  const itemWidthAndHeight = Math.round(carouselWidth * 0.33);
  return itemWidthAndHeight;
};

export { CarouselWidth, ItemWidthAndHeight };
