import { createSlice } from '@reduxjs/toolkit';

const randomFeedSlice = createSlice({
  name: 'randomFeed',
  initialState: {
    isLoadingRandomFeed: false,
    isRandomFeedLoaded: false,
    error: false,
    randomFeed: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingRandomFeed = true;
      state.isRandomFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingRandomFeed = false;
      state.isRandomFeedLoaded = false;
    },
    randomFeedSuccess: (state, action) => {
      state.randomFeed = action.payload;
      state.isLoadingRandomFeed = false;
      state.isRandomFeedLoaded = true;
    },
  },
});

export const {
  startLoading,
  hasError,
  randomFeedSuccess,
} = randomFeedSlice.actions;
export default randomFeedSlice.reducer;
