import { useWindowDimensions } from 'react-native';

const CarouselWidth = () => {
  const carouselWidth = useWindowDimensions().width;
  console.log('Carousel width', carouselWidth);
  return carouselWidth;
};

const ItemWidthAndHeight = () => {
  const carouselWidth = CarouselWidth();
  const itemWidthAndHeight = Math.round(carouselWidth * 0.75);
  console.log('itemWidthAndHeight', itemWidthAndHeight);
  return itemWidthAndHeight;
};

export { CarouselWidth, ItemWidthAndHeight };
