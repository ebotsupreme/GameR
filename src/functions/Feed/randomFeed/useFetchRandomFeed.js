import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchRandomFeed } from '../../../features/randomFeed/index';

const useFetchRandomFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchRandomFeed);
  }, [dispatch]);

  const { isLoadingRandomFeed, isRandomFeedLoaded, randomFeed } = useSelector(
    (state) => state.randomFeed,
  );

  return { isLoadingRandomFeed, isRandomFeedLoaded, randomFeed };
};

export default useFetchRandomFeed;
