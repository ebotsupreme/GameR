import { createAsyncThunk } from '@reduxjs/toolkit';

import { startLoading, hasError, mealFeedSuccess } from './index';
import { handleFetchMealFeedResponse } from '../../api/mealFeed/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';

/**
 *
 */
const handleFetchMealFeedByTitle = createAsyncThunk(
  'mealFeed/handleFetchMealFeedByTitle',
  async (title, thunkAPI) => {
    /**
     * NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
     */
    // try {
    //   const response = await handleFetchMealFeedResponse(title);
    //   return response.results;
    // } catch (e) {
    //   let errorMessage = '';
    //   console.log('error', e);
    //   /**
    //    * API limit error
    //    */
    //   errorMessage = e.message;
    //   if (e.message === 'Request failed with status code 402') {
    //     errorMessage =
    //       'Your daily points limit of 150 has been reached. Please upgrade your plan to continue using the API.';
    //   }
    //   return errorMessage;
    // }

    const feedData = await handleFetchFeedType(title);
    const response = await handleReturnFeedData(feedData)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        console.log('error', e);
      });
    return response.results;
  },
);

/**
 *
 * @param {{}} dispatch
 */
const handleFetchMealFeed = async (dispatch, getState) => {
  // const breakfast = 'breakfast';
  // dispatch(startLoading());
  // try {
  //   await api
  //     .get(
  //       `/recipes/complexSearch?apiKey=${Config.API}&type=${breakfast}&number=5`,
  //     )
  //     .then((response) => {
  //       dispatch(mealFeedSuccess(response.data));
  //     });
  // } catch (e) {
  //   console.error(e.message);
  //   dispatch(hasError(e.message));
  // }
};

export { handleFetchMealFeed, handleFetchMealFeedByTitle };
