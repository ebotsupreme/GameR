import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const popularFeedSlice = createSlice({
  name: 'popularFeed',
  initialState: {
    isLoadingPopularFeed: false,
    isPopularFeedLoaded: false,
    error: false,
    popularFeed: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingPopularFeed = true;
      state.isPopularFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingPopularFeed = false;
      state.isPopularFeedLoaded = false;
    },
    popularFeedSuccess: (state, action) => {
      state.popularFeed = action.payload;
      state.isLoadingPopularFeed = false;
      state.isPopularFeedLoaded = true;
    },
  },
});

export const {
  startLoading,
  hasError,
  popularFeedSuccess,
} = popularFeedSlice.actions;
export default popularFeedSlice.reducer;
export const selectPopularFeed = (state) => state.popularFeed.popularFeed;
export const selectIsLoading = (state) =>
  state.popularFeed.isLoadingPopularFeed;
export const selectError = (state) => state.popularFeed.error;
