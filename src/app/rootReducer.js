import { combineReducers } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import recentFeedReducer from '../features/recentFeed/recentFeedSlice';

const rootReducer = combineReducers({
  recentFeedReducer,
});

export default rootReducer;
