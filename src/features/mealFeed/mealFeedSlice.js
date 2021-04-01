import { createSlice } from '@reduxjs/toolkit';
import { handleFetchMealFeedByTitle } from './mealFeedActions';

const mealFeedSlice = createSlice({
  name: 'mealFeed',
  initialState: {
    mealFeed: [],
    isLoadingMealFeed: false,
    error: false,
    mealType: '',
    isDataLoaded: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoadingMealFeed = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoadingMealFeed = false;
    },
    hasMealType: (state, action) => {
      state.mealType = action.payload;
      state.isLoadingMealFeed = false;
    },
    mealFeedSuccess: (state, action) => {
      state.mealFeed = action.payload;
      state.isLoadingMealFeed = false;
      state.isDataLoaded = true;
    },
  },
  extraReducers: {
    [handleFetchMealFeedByTitle.pending]: (state, action) => {
      state.isLoadingMealFeed = true;
      state.isDataLoaded = false;
    },
    [handleFetchMealFeedByTitle.fulfilled]: (state, action) => {
      state.mealFeed = action.payload;
      state.isLoadingMealFeed = false;
      state.isDataLoaded = true;
    },
    [handleFetchMealFeedByTitle.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoadingMealFeed = false;
      state.isDataLoaded = false;
    },
  },
});

export const {
  startLoading,
  hasError,
  hasMealType,
  mealFeedSuccess,
} = mealFeedSlice.actions;
export default mealFeedSlice.reducer;
export const selectMealFeed = (state) => state.mealFeed.mealFeed;
export const selectIsLoading = (state) => state.mealFeed.isLoadingMealFeed;
export const selectError = (state) => state.mealFeed.error;
export const selectMealType = (state) => state.mealFeed.mealType;
