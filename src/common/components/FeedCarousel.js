import React from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  CarouselWidth,
  ItemWidthAndHeight,
} from '../../utility/CarouselDimensions';

const FeedCarousel = (props) => {
  const { data } = props;
  console.log('data', data);
  console.log('CarouselWidth', CarouselWidth());
  console.log('itemWidthAndHeight', ItemWidthAndHeight());
  return (
    <Carousel
      data={data}
      sliderWidth={CarouselWidth()}
      itemWidth={ItemWidthAndHeight()}
    />
  );
};

export default FeedCarousel;
