import { createSlice } from '@reduxjs/toolkit';
import { handleFetchCuisineFeedByTitle } from './cuisineFeedActions';

/**
 *
 */
const cuisineFeedSlice = createSlice({
  name: 'cuisineFeed',
  initialState: {
    isLoadingCuisineFeed: false,
    isCuisineFeedLoaded: false,
    error: false,
    cuisineFeed: [],
    cuisineType: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingCuisineFeed = true;
      state.isCuisineFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingCuisineFeed = false;
      state.isCuisineFeedLoaded = false;
    },
    cuisineFeedSuccess: (state, action) => {
      state.cuisineType = action.payload;
      state.isLoadingCuisineFeed = false;
      state.isCuisineFeedLoaded = true;
    },
  },
  extraReducers: {
    [handleFetchCuisineFeedByTitle.pending]: (state) => {
      state.isLoadingCuisineFeed = true;
      state.isCuisineFeedLoaded = false;
    },
    [handleFetchCuisineFeedByTitle.fulfilled]: (state, action) => {
      state.cuisineFeed = action.payload;
      state.isLoadingCuisineFeed = false;
      state.isCuisineFeedLoaded = true;
    },
    [handleFetchCuisineFeedByTitle.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoadingCuisineFeed = false;
      state.isCuisineFeedLoaded = false;
    },
  },
});

export const {
  startLoading,
  hasError,
  cuisineFeedSuccess,
} = cuisineFeedSlice.actions;
export default cuisineFeedSlice.reducer;
