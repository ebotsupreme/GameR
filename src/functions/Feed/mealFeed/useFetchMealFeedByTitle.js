import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeedByTitle } from '../../../features/mealFeed/index';

/**
 *
 */
const useFetchMealFeedByTitle = (title = '', screen = '') => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (title && screen === 'mealFeed') {
      dispatch(handleFetchMealFeedByTitle(title));
    }
  }, [dispatch, title, screen]);

  const { isLoadingMealFeed, isMealFeedLoaded, mealFeed } = useSelector(
    (state) => state.mealFeed,
  );

  return { isLoadingMealFeed, isMealFeedLoaded, mealFeed };
};

export default useFetchMealFeedByTitle;
