import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import { CarouselWidth, ItemWidthAndHeight } from '../../utility/index';

const FeedCarousel = (props) => {
  const { data, renderItemComponent } = props;
  const carouselRef = useRef(null);
  return (
    <Carousel
      data={data}
      sliderWidth={CarouselWidth()}
      itemWidth={ItemWidthAndHeight()}
      renderItem={renderItemComponent}
      ref={carouselRef}
    />
  );
};

export default FeedCarousel;
