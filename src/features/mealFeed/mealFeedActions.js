import { createAsyncThunk } from '@reduxjs/toolkit';
import Config from 'react-native-config';

import { startLoading, hasError, mealFeedSuccess } from './index';
import { api } from '../../api/index';

import {
  breakfastFeedData,
  appetizerFeedData,
  soupFeedData,
  saladFeedData,
  breadFeedData,
  sideDishFeedData,
  mainCourseFeedData,
  dessertFeedData,
  sauceFeedData,
  drinkFeedData,
} from '../../json/meal/index';

/**
 *
 * @param {string} mealType
 */
const onFetchMealTypeData = async (mealType) => {
  switch (mealType) {
    case 'Breakfast':
      return breakfastFeedData;
    case 'Appetizer':
      return appetizerFeedData;
    case 'Soup':
      return soupFeedData;
    case 'Salad':
      return saladFeedData;
    case 'Bread':
      return breadFeedData;
    case 'Side Dish':
      return sideDishFeedData;
    case 'Main Course':
      return mainCourseFeedData;
    case 'Dessert':
      return dessertFeedData;
    case 'Sauce':
      return sauceFeedData;
    case 'Drink':
      return drinkFeedData;
  }
};
/**
 *
 * @param {{}} feedData
 */
const returnFeedData = (feedData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = feedData;
      if (data === undefined || (data && data.length === 0)) {
        reject('Error, feed empty');
      }
      resolve(data);
    }, 500);
  });
};
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

    const feedData = await onFetchMealTypeData(mealType);
    const response = await returnFeedData(feedData)
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
