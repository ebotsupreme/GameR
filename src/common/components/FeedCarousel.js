import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import { handleCarouselWidth, ITEM_WIDTH } from '../../utility/index';

/**
 *
 * @param {{}} props
 */
const FeedCarousel = ({ data, renderItemComponent }) => {
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
      containerCustomStyle={{ paddingHorizontal: 10 }}
      contentContainerCustomStyle={{
        overflow: 'hidden',
        width: (ITEM_WIDTH + 2) * data.length,
      }}
    />
  );
};

export default FeedCarousel;
