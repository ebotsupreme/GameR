import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { startLoading, hasError, mealFeedSuccess } from './index';
import { api } from '../../api/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';

/**
 *
 */
const handleFetchMealFeedByTitle = createAsyncThunk(
  'mealFeed/handleFetchMealFeedByTitle',
  async (title, thunkAPI) => {
    // NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
    // const response = await api.get(
    //   `/recipes/complexSearch?apiKey=${Config.API}&type=${mealType}&number=50`,
    // );
    // return response.data;

    const feedData = await handleFetchFeedType(title);
    // const feedData = await onFetchMealTypeData(title);
    const response = await handleReturnFeedData(feedData)
      // const response = await returnFeedData(feedData)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log('error', e);
      });
    return response;
  },
);

/**
 *
 * @param {{}} dispatch
 */
const handleFetchMealFeed = async (dispatch, getState) => {
  const breakfast = 'breakfast';
  dispatch(startLoading());
  try {
    await api
      .get(
        `/recipes/complexSearch?apiKey=${Config.API}&type=${breakfast}&number=5`,
      )
      .then((response) => {
        dispatch(mealFeedSuccess(response.data));
      });
  } catch (e) {
    console.error(e.message);
    dispatch(hasError(e.message));
  }
};

export { handleFetchMealFeed, handleFetchMealFeedByTitle };
