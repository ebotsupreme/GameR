import { createSlice } from '@reduxjs/toolkit';
import { handleFetchSearchResultById } from './searchResultActions';

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState: {
    searchResult: [],
    isLoadingSearchResult: false,
    error: false,
    isSearchResultLoaded: false,
  },
  reducers: {},
  extraReducers: {
    [handleFetchSearchResultById.pending]: (state, action) => {
      state.isLoadingSearchResult = true;
      state.isSearchResultLoaded = false;
    },
    [handleFetchSearchResultById.fulfilled]: (state, action) => {
      state.searchResult = action.payload;
      state.isLoadingSearchResult = false;
      state.isSearchResultLoaded = true;
    },
    [handleFetchSearchResultById.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoadingSearchResult = false;
      state.isSearchResultLoaded = false;
    },
  },
});

export default searchResultSlice.reducer;
