import React, { useRef, Dimensions } from 'react';
import Carousel from 'react-native-snap-carousel';

import { handleCarouselWidth, ITEM_WIDTH } from '../../utility/index';

const FeedCarousel = (props) => {
  const { data, renderItemComponent } = props;
  const carouselRef = useRef(null);

  return (
    <Carousel
      data={data}
      sliderWidth={handleCarouselWidth()}
      itemWidth={ITEM_WIDTH}
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
