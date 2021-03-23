import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {
  handleItemWidthAndHeight,
  HORIZONTAL_MARGIN,
  ITEM_WIDTH,
} from '../../utility/index';

/**
 *
 */
const SkeletonCard = () => {
  const WIDTH = handleItemWidthAndHeight();
  const HEIGHT = WIDTH;

  return (
    <SkeletonPlaceholder backgroundColor="#DADADB">
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
        borderRadius={10}
        width={ITEM_WIDTH}
        height={HEIGHT}
        paddingHorizontal={HORIZONTAL_MARGIN}>
        <SkeletonPlaceholder.Item
          width={WIDTH}
          height={HEIGHT}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonCard;
