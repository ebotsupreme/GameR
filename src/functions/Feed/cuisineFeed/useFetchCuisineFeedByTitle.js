import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchCuisineFeedByTitle } from '../../../features/cuisineFeed/index';

/**
 *
 */
const useFetchCuisineFeedByTitle = (title = '', screen = '') => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (title && screen === 'cuisineFeed') {
      dispatch(handleFetchCuisineFeedByTitle(title));
    }
  }, [dispatch, title, screen]);

  const {
    isLoadingCuisineFeed,
    isCuisineFeedLoaded,
    cuisineFeed,
  } = useSelector((state) => state.cuisineFeed);

  return { isLoadingCuisineFeed, isCuisineFeedLoaded, cuisineFeed };
};

export default useFetchCuisineFeedByTitle;
