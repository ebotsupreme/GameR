import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import { handleSearchResultItemWidth } from '../../utility/index';

/**
 *
 */
const SearchResultSkeletonCard = () => {
  const WIDTH = handleSearchResultItemWidth();
  const HEIGHT = WIDTH;

  return (
    <SkeletonPlaceholder
      backgroundColor="#DADADB"
      flexDirection="row"
      flexWrap="wrap">
      <SkeletonPlaceholder.Item flex={1} alignItems="center">
        <SkeletonPlaceholder.Item
          paddingVertical={10}
          paddingHorizontal={15}
          marginHorizontal={7}
          marginVertical={10}
          width={WIDTH - 10 / 2}
          height={HEIGHT - 10}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SearchResultSkeletonCard;
