import { combineReducers } from '@reduxjs/toolkit';
import popularFeedReducer from '../features/popularFeed/popularFeedSlice';
import mealFeedReducer from '../features/mealFeed/mealFeedSlice';
import searchResultReducer from '../features/searchResult/searchResultSlice';
import cuisineFeedReducer from '../features/cuisineFeed/cuisineFeedSlice';

const rootReducer = combineReducers({
  popularFeed: popularFeedReducer,
  mealFeed: mealFeedReducer,
  searchResult: searchResultReducer,
  cuisineFeed: cuisineFeedReducer,
});

export default rootReducer;
