import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchFeaturedFeed } from '../../../features/featuredFeed/index';

const useFetchFeaturedFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchFeaturedFeed);
  }, [dispatch]);

  const {
    isLoadingFeaturedFeed,
    isFeaturedFeedLoaded,
    featuredFeed,
  } = useSelector((state) => state.featuredFeed);

  return { isLoadingFeaturedFeed, isFeaturedFeedLoaded, featuredFeed };
};

export default useFetchFeaturedFeed;
