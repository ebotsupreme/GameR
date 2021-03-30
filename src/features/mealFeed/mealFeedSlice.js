import { createSlice } from '@reduxjs/toolkit';
import { handleFetchMealFeedByTitle } from './mealFeedActions';

const mealFeedSlice = createSlice({
  name: 'mealFeed',
  initialState: {
    mealFeed: [],
    isLoading: false,
    error: false,
    mealType: '',
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    hasMealType: (state, action) => {
      state.mealType = action.payload;
      state.isLoading = false;
    },
    mealFeedSuccess: (state, action) => {
      state.mealFeed = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: {
    [handleFetchMealFeedByTitle.pending]: (state, action) => {
      state.isLoading = true;
    },
    [handleFetchMealFeedByTitle.fulfilled]: (state, action) => {
      state.mealFeed = action.payload;
      state.isLoading = false;
    },
    [handleFetchMealFeedByTitle.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
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
export const selectIsLoading = (state) => state.mealFeed.isLoading;
export const selectError = (state) => state.mealFeed.error;
export const selectMealType = (state) => state.mealFeed.mealType;
