import { combineReducers } from '@reduxjs/toolkit';
import popularFeedReducer from '../features/popularFeed/popularFeedSlice';
import mealFeedReducer from '../features/mealFeed/mealFeedSlice';
import searchResultReducer from '../features/searchResult/searchResultSlice';
import cuisineFeedReducer from '../features/cuisineFeed/cuisineFeedSlice';
import healthyFeedReducer from '../features/healthyFeed/healthyFeedSlice';

const rootReducer = combineReducers({
  popularFeed: popularFeedReducer,
  mealFeed: mealFeedReducer,
  searchResult: searchResultReducer,
  cuisineFeed: cuisineFeedReducer,
  healthyFeed: healthyFeedReducer,
});

export default rootReducer;
