import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  CarouselWidth,
  ItemWidthAndHeight,
} from '../../utility/CarouselDimensions';
import FeedCard from './FeedCard';

const FeedCarousel = (props) => {
  const { data } = props;
  const carouselRef = useRef(null);
  console.log('data[0].recipes', data[0].recipes);
  console.log('CarouselWidth', CarouselWidth());
  console.log('itemWidthAndHeight', ItemWidthAndHeight());
  return (
    <Carousel
      data={data[0].recipes}
      sliderWidth={CarouselWidth()}
      itemWidth={ItemWidthAndHeight()}
      renderItem={(item, index) => <FeedCard {...item} {...props} />}
      ref={carouselRef}
    />
  );
};

export default FeedCarousel;
