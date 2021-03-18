import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const recentFeedSlice = createSlice({
  name: 'recentFeed',
  initialState: {
    recentFeed: [],
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
    recentFeedSuccess: (state, action) => {
      state.recentFeed = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  startLoading,
  hasError,
  recentFeedSuccess,
} = recentFeedSlice.actions;
export default recentFeedSlice.reducer;
