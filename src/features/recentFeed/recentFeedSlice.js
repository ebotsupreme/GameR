import { createSlice } from '@reduxjs/toolkit';

/**
 *
 */
const recentFeedSlice = createSlice({
  name: 'recentFeed',
  initialState: {
    recentFeed: [],
    isLoading: false,
  },
  reducers: {
    recentFeedSuccess: (state, action) => {
      state.recentFeed = action.payload;
      state.isLoading = false;
    },
  },
});

export const { recentFeedSuccess } = recentFeedSlice.actions;
export default recentFeedSlice.reducer;
