import { combineReducers } from '@reduxjs/toolkit';
import popularFeedReducer from '../features/popularFeed/popularFeedSlice';
import mealFeedReducer from '../features/mealFeed/mealFeedSlice';

const rootReducer = combineReducers({
  popularFeed: popularFeedReducer,
  mealFeed: mealFeedReducer,
});

export default rootReducer;
