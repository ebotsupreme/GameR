import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const healthyFeedSlice = createSlice({
  name: 'healthyFeed',
  initialState: {
    isLoadingHealthyFeed: false,
    isHealthyFeedLoaded: false,
    error: false,
    healthyFeed: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingHealthyFeed = true;
      state.isHealthyFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingHealthyFeed = false;
      state.isHealthyFeedLoaded = false;
    },
    healthyFeedSuccess: (state, action) => {
      state.healthyFeed = action.payload;
      state.isLoadingHealthyFeed = false;
      state.isHealthyFeedLoaded = true;
    },
  },
});

export const {
  startLoading,
  hasError,
  healthyFeedSuccess,
} = healthyFeedSlice.actions;
export default healthyFeedSlice.reducer;
