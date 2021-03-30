import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';
import { useSelector, useDispatch } from 'react-redux';

import { startLoading, hasError, mealFeedSuccess, hasMealType } from './index';
import { api } from '../../api/index';

const handleFetchMealFeedByTitle = createAsyncThunk(
  'mealFeed/handleFetchMealFeedByTitle',
  async (mealType, thunkAPI) => {
    const response = await api.get(
      `/recipes/complexSearch?apiKey=${Config.API}&type=${mealType}&number=5`,
    );
    return response.data;
  },
);

/**
 *
 * @param {{}} dispatch
 */
const handleFetchMealFeed = async (dispatch, getState) => {
  const stateB = getState();
  console.log('get state for meal mealType', stateB);
  const breakfast = 'breakfast';
  dispatch(startLoading());
  try {
    await api
      .get(
        `/recipes/complexSearch?apiKey=${Config.API}&type=${breakfast}&number=5`,
      )
      .then((response) => {
        // console.log('response.data', response.data);
        // dispatch(mealFeedSuccess(response.data));
      });
  } catch (e) {
    console.error(e.message);
    dispatch(hasError(e.message));
  }
};

export { handleFetchMealFeed, handleFetchMealFeedByTitle };
