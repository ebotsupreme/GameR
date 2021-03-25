import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const popularFeedSlice = createSlice({
  name: 'popularFeed',
  initialState: {
    popularFeed: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    popularFeedSuccess: (state, action) => {
      state.popularFeed = action.payload;
      state.isLoading = false;
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
export const selectIsLoading = (state) => state.popularFeed.isLoading;
export const selectError = (state) => state.popularFeed.error;
