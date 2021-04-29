import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchMealFeed } from '../../../features/mealFeed/index';

/**
 *
 */
const useFetchMealFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchMealFeed);
  }, [dispatch]);

  const {
    isLoadingMealFeed,
    isMealFeedLoaded,
    mealFeed,
    mealType,
  } = useSelector((state) => state.mealFeed);

  return { isLoadingMealFeed, isMealFeedLoaded, mealFeed, mealType };
};

export default useFetchMealFeed;
