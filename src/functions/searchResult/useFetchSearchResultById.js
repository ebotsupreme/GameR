import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleFetchSearchResultById } from '../../features/searchResult/index';

const useFetchSearchResultById = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchSearchResultById(id));
  }, [dispatch, id]);

  const {
    isLoadingSearchResult,
    isSearchResultLoaded,
    searchResult,
  } = useSelector((state) => state.searchResult);

  return {
    isLoadingSearchResult,
    isSearchResultLoaded,
    searchResult,
  };
};

export default useFetchSearchResultById;
