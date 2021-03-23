import React, { useRef } from 'react';
import Carousel from 'react-native-snap-carousel';

import { handleCarouselWidth, ITEM_WIDTH } from '../../utility/index';

/**
 *
 * @param {{}} props
 */
const FeedCarousel = (props) => {
  const { data, renderItemComponent } = props;
  const carouselRef = useRef(null);
  console.log('item width', ITEM_WIDTH, 'data length', data.length);
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
        width: ITEM_WIDTH * data.length,
      }}
    />
  );
};

export default FeedCarousel;
