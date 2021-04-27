import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchHealthyFeed } from '../../../features/healthyFeed/index';

const useFetchHealthyFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchHealthyFeed);
  }, [dispatch]);

  const {
    isLoadingHealthyFeed,
    isHealthyFeedLoaded,
    healthyFeed,
  } = useSelector((state) => state.healthyFeed);

  return { isLoadingHealthyFeed, isHealthyFeedLoaded, healthyFeed };
};

export default useFetchHealthyFeed;
