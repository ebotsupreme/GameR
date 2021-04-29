import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  handleFetchFeaturedFeed,
  handleFetchPopularFeed,
  handleFetchMealFeed,
  handleFetchCuisineFeed,
  handleFetchHealthyFeed,
  handleFetchRandomFeed,
} from '../../../features/index';

const useRefreshControl = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  /**
   *
   */
  const onDispatchFeed = useCallback(() => {
    dispatch(handleFetchFeaturedFeed);
    dispatch(handleFetchPopularFeed);
    dispatch(handleFetchMealFeed);
    dispatch(handleFetchCuisineFeed);
    dispatch(handleFetchHealthyFeed);
    dispatch(handleFetchRandomFeed);
  }, [dispatch]);
  /**
   *
   * @param {number} timeout
   */
  const wait = (timeout) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  /**
   *
   */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    onDispatchFeed();
    wait(500).then(() => setRefreshing(false));
  }, [onDispatchFeed]);

  return { refreshing, onRefresh };
};

export default useRefreshControl;
