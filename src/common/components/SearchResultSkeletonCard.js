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
      <SkeletonPlaceholder.Item
        flex={1}
        // justifyContent="center"
        alignItems="center">
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

  return (
    <SkeletonPlaceholder
      backgroundColor="#DADADB"
      flex={1}
      justifyContent="center"
      alignItems="center">
      <SkeletonPlaceholder.Item
        paddingVertical={10}
        paddingHorizontal={15}
        marginHorizontal={7}
        marginVertical={10}
        width={WIDTH - 10}
        height={HEIGHT - 10}
        borderRadius={10}
      />
    </SkeletonPlaceholder>
  );
};

export default SearchResultSkeletonCard;
