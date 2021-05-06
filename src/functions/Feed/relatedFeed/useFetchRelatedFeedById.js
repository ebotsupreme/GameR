import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchRelatedFeedById } from '../../../features/relatedFeed/index';

/**
 *
 */
const useFetchRelatedFeedById = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchRelatedFeedById(id));
  }, [dispatch, id]);

  /**
   *
   */
  const {
    isLoadingRelatedFeed,
    isRelatedFeedLoaded,
    relatedFeed,
  } = useSelector((state) => state.relatedFeed);

  return { isLoadingRelatedFeed, isRelatedFeedLoaded, relatedFeed };
};

export default useFetchRelatedFeedById;
