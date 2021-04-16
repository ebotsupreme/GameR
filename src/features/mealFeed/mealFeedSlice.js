import { createSlice } from '@reduxjs/toolkit';
import { handleFetchMealFeedByTitle } from './mealFeedActions';

/**
 *
 */
const mealFeedSlice = createSlice({
  name: 'mealFeed',
  initialState: {
    isLoadingMealFeed: false,
    isMealFeedLoaded: false,
    error: false,
    mealFeed: [],
    mealType: [],
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingMealFeed = true;
      state.isMealFeedLoaded = false;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingMealFeed = false;
      state.isMealFeedLoaded = false;
    },
    mealFeedSuccess: (state, action) => {
      state.mealType = action.payload;
      state.isLoadingMealFeed = false;
      state.isMealFeedLoaded = true;
    },
  },
  extraReducers: {
    [handleFetchMealFeedByTitle.pending]: (state, action) => {
      state.isLoadingMealFeed = true;
      state.isMealFeedLoaded = false;
    },
    [handleFetchMealFeedByTitle.fulfilled]: (state, action) => {
      state.mealFeed = action.payload;
      state.isLoadingMealFeed = false;
      state.isMealFeedLoaded = true;
    },
    [handleFetchMealFeedByTitle.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoadingMealFeed = false;
      state.isMealFeedLoaded = false;
    },
  },
});

export const {
  startLoading,
  hasError,
  mealFeedSuccess,
} = mealFeedSlice.actions;
export default mealFeedSlice.reducer;
export const selectMealFeed = (state) => state.mealFeed.mealFeed;
export const selectIsLoading = (state) => state.mealFeed.isLoadingMealFeed;
export const selectError = (state) => state.mealFeed.error;
export const selectMealType = (state) => state.mealFeed.mealType;
