import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { startLoading, hasError, mealFeedSuccess, hasMealType } from './index';
import { api } from '../../api/index';

import MealTypeFeedData from '../../json/breakfastMealType.json';

/**
 *
 */
const fetchMealTypeTestFeed = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = MealTypeFeedData;
    if (data.length === 0) {
      reject('Error, feed empty');
    }
    resolve(data);
  }, 500);
});
/**
 *
 */
const handleFetchMealFeedByTitle = createAsyncThunk(
  'mealFeed/handleFetchMealFeedByTitle',
  async (mealType, thunkAPI) => {
    // NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
    // const response = await api.get(
    //   `/recipes/complexSearch?apiKey=${Config.API}&type=${mealType}&number=50`,
    // );
    // return response.data;

    const response = await fetchMealTypeTestFeed.then((data) => {
      return data;
    });
    return response;
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
