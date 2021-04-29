import { handleSearchResultFeedPlaceholder } from '../../utility/index';

/**
 *
 * @param {string} feedName
 * @param {boolean} isMealFeedLoaded
 * @param {{}} mealFeed
 * @param {boolean} isCuisineFeedLoaded
 * @param {{}} cuisineFeed
 * @param {boolean} isRandomFeedLoaded
 * @param {{}} randomFeed
 */
const handleRenderFLatListData = (
  feedName,
  isMealFeedLoaded,
  mealFeed,
  isCuisineFeedLoaded,
  cuisineFeed,
  isRandomFeedLoaded,
  randomFeed,
) => {
  switch (feedName) {
    case 'mealFeed':
      return isMealFeedLoaded ? mealFeed : handleSearchResultFeedPlaceholder();
    case 'cuisineFeed':
      return isCuisineFeedLoaded
        ? cuisineFeed
        : handleSearchResultFeedPlaceholder();
    case 'random':
      return isRandomFeedLoaded
        ? randomFeed
        : handleSearchResultFeedPlaceholder();
  }
};
/**
 *
 * @param {string} feedName
 * @param {{}} feedRandom
 * @param {boolean} isMealFeedLoaded
 * @param {boolean} isCuisineFeedLoaded
 * @param {boolean} isRandomFeedLoaded
 */
const handleRenderFeedLoadedState = (
  feedName = '',
  feedRandom = '',
  isMealFeedLoaded,
  isCuisineFeedLoaded,
  isRandomFeedLoaded,
) => {
  switch (feedName ? feedName : feedRandom) {
    case 'mealFeed':
      return isMealFeedLoaded;
    case 'cuisineFeed':
      return isCuisineFeedLoaded;
    case 'random':
      return isRandomFeedLoaded;
  }
};

export { handleRenderFLatListData, handleRenderFeedLoadedState };
