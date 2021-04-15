import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleFetchCuisineFeedResponse } from '../../api/cuisineFeed/index';
import { handleFetchFeedType, handleReturnFeedData } from '../../utility/index';
import { startLoading, hasError, cuisineFeedSuccess } from './index';
import { cuisineTypes } from '../../json/cuisine/index';

/**
 *
 */
const handleFetchCuisineFeedByTitle = createAsyncThunk(
  'cuisineFeed/handleFetchCuisineFeedByTitle',
  async (title, thunkAPI) => {
    /**
     * NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
     */
    // try {
    //   const response = await handleFetchCuisineFeedResponse(title);
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

const handleFetchCuisineFeed = async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await handleReturnFeedData(cuisineTypes);
    dispatch(cuisineFeedSuccess(response));
  } catch (e) {
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }
};

export { handleFetchCuisineFeed, handleFetchCuisineFeedByTitle };
