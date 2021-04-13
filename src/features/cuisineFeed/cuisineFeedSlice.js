import { createSlice } from '@reduxjs/toolkit';
import { handleFetchCuisineFeedByTitle } from './cuisineFeedActions';

/**
 *
 */
const cuisineSlice = createSlice({
  name: 'cuisineFeed',
  initialState: {
    isLoadingCuisineFeed: false,
    isCuisineFeedLoaded: false,
    error: false,
    cuisineFeed: [],
  },
  reducers: {},
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

export default cuisineSlice.reducer;
