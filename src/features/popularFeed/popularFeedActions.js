import { startLoading, hasError, popularFeedSuccess } from './index';
import { handleFetchPopularFeedResponse } from '../../api/popularFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import PopularRecipesFeedData from '../../json/popular/popularRecipesFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchPopularFeed = async (dispatch) => {
  /**
   * NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  // dispatch(startLoading());
  // try {
  //   const payload = await handleFetchPopularFeedResponse();
  //   dispatch(popularFeedSuccess(payload));
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
  //   dispatch(hasError(errorMessage));
  // }

  dispatch(startLoading());
  try {
    const response = await handleReturnFeedData(PopularRecipesFeedData);
    dispatch(popularFeedSuccess(response.results));
  } catch (e) {
    console.log('error', e);
    dispatch(hasError(e.message));
  }
};
