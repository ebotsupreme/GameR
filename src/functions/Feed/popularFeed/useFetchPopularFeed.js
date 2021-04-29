import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchPopularFeed } from '../../../features/popularFeed/index';

const useFetchPopularFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchPopularFeed);
  }, [dispatch]);

  /**
   *
   */
  const {
    isLoadingPopularFeed,
    isPopularFeedLoaded,
    popularFeed,
  } = useSelector((state) => state.popularFeed);

  return { isLoadingPopularFeed, isPopularFeedLoaded, popularFeed };
};

export default useFetchPopularFeed;
