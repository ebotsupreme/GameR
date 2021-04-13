import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

/**
 *
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ immutableCheck: false })],
});

export default store;
