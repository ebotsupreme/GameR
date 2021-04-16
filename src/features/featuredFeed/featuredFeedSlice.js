import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const featuredFeedSlice = createSlice({
  name: 'featuredFeed',
  initialState: {
    isLoadingFeaturedFeed: false,
    isFeaturedFeedLoaded: false,
    error: false,
    featuredFeed: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingFeaturedFeed = true;
      state.isFeaturedFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingFeaturedFeed = false;
      state.isFeaturedFeedLoaded = false;
    },
    featuredFeedSuccess: (state, action) => {
      state.featuredFeed = action.payload;
      state.isLoadingFeaturedFeed = false;
      state.isFeaturedFeedLoaded = true;
    },
  },
});

export const {
  startLoading,
  hasError,
  featuredFeedSuccess,
} = featuredFeedSlice.actions;
export default featuredFeedSlice.reducer;
