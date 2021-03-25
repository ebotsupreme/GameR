import { combineReducers } from '@reduxjs/toolkit';
import popularFeedReducer from '../features/popularFeed/popularFeedSlice';

const rootReducer = combineReducers({
  popularFeed: popularFeedReducer,
});

export default rootReducer;
