import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

/**
 *
 */
const SkeletonCard = ({
  screen,
  itemWidth,
  width,
  height,
  horizontalMargin,
}) => {
  return (
    <SkeletonPlaceholder backgroundColor="#DADADB">
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="relative"
        borderRadius={10}
        width={screen === 'featuredFeed' ? width : itemWidth}
        height={height}
        paddingHorizontal={screen === 'featuredFeed' ? 10 : horizontalMargin}
        marginHorizontal={screen === 'featuredFeed' ? 5 : 0}>
        <SkeletonPlaceholder.Item
          width={width}
          height={height}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonCard;
