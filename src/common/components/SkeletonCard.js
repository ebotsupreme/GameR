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
  paddingTop,
  paddingBottom,
  marginBottom,
  marginHorizontal,
  marginTop,
  borderRadius,
  justifyContent,
}) => {
  return (
    <SkeletonPlaceholder backgroundColor="#DADADB">
      <SkeletonPlaceholder.Item
        flexDirection="row"
        justifyContent={justifyContent ? justifyContent : 'center'}
        alignItems={screen === 'Feed' ? 'flex-start' : 'center'}
        position="relative"
        borderRadius={borderRadius ? borderRadius : 10}
        width={screen === 'featuredFeed' ? width : itemWidth}
        height={height}
        paddingTop={paddingTop ? paddingTop : 0}
        paddingBottom={paddingBottom ? paddingBottom : 0}
        paddingHorizontal={screen === 'featuredFeed' ? 10 : horizontalMargin}
        marginHorizontal={screen === 'featuredFeed' ? 5 : marginHorizontal}
        marginTop={screen === 'Feed' ? 10 : marginTop}
        marginBottom={screen === 'Feed' ? 12 : marginBottom}>
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
