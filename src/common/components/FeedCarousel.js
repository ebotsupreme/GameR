import React, { useRef, Dimensions } from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  handleCarouselWidth,
  handleItemWidthAndHeight,
} from '../../utility/index';

const FeedCarousel = (props) => {
  const { data, renderItemComponent } = props;
  const carouselRef = useRef(null);

  const WIDTH = handleItemWidthAndHeight();
  const horizontalMargin = 5;
  const slideWidth = WIDTH;
  const HEIGHT = WIDTH;
  const sliderWidth = handleCarouselWidth();
  const itemWidth = slideWidth + horizontalMargin * 2;
  const itemHeight = HEIGHT;
  return (
    <Carousel
      data={data}
      sliderWidth={handleCarouselWidth()}
      itemWidth={itemWidth}
      renderItem={renderItemComponent}
      ref={carouselRef}
      activeSlideAlignment={'start'}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      containerCustomStyle={{ paddingLeft: 10 }}
    />
  );
};

export default FeedCarousel;
