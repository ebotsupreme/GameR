import { createSlice } from '@reduxjs/toolkit';
import { handleFetchRelatedFeedById } from './relatedFeedActions';

/**
 *
 */
const relatedFeedSlice = createSlice({
  name: 'relatedFeed',
  initialState: {
    isLoadingRelatedFeed: false,
    isRelatedFeedLoaded: false,
    error: false,
    relatedFeed: [],
  },
  reducers: {},
  extraReducers: {
    [handleFetchRelatedFeedById.pending]: (state, action) => {
      state.isLoadingRelatedFeed = true;
      state.isRelatedFeedLoaded = false;
    },
    [handleFetchRelatedFeedById.fulfilled]: (state, action) => {
      state.relatedFeed = action.payload;
      state.isLoadingRelatedFeed = false;
      state.isRelatedFeedLoaded = true;
    },
    [handleFetchRelatedFeedById.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoadingRelatedFeed = false;
      state.isRelatedFeedLoaded = false;
    },
  },
});

export default relatedFeedSlice.reducer;
