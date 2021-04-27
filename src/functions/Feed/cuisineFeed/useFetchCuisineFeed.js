import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchCuisineFeed } from '../../../features/cuisineFeed/index';

const useFetchCuisineFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchCuisineFeed);
  }, [dispatch]);

  const {
    isLoadingCuisineFeed,
    isCuisineFeedLoaded,
    cuisineFeed,
    cuisineType,
  } = useSelector((state) => state.cuisineFeed);

  return {
    isLoadingCuisineFeed,
    isCuisineFeedLoaded,
    cuisineFeed,
    cuisineType,
  };
};

export default useFetchCuisineFeed;
