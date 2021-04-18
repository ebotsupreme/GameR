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
        justifyContent={screen === 'Feed' ? 'flex-start' : 'center'}
        alignItems={screen === 'Feed' ? 'flex-start' : 'center'}
        position="relative"
        borderRadius={10}
        width={screen === 'featuredFeed' ? width : itemWidth}
        height={height}
        paddingHorizontal={screen === 'featuredFeed' ? 10 : horizontalMargin}
        marginHorizontal={screen === 'featuredFeed' ? 5 : 0}
        marginTop={screen === 'Feed' ? 10 : 0}
        marginBottom={screen === 'Feed' ? 12 : 0}>
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
