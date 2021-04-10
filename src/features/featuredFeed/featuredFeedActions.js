import { startLoading, hasError, featuredFeedSuccess } from './index';
import { handleFetchFeaturedFeedResponse } from '../../api/featuredFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import featuredFeedData from '../../json/featured/featuredRecipeFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchFeaturedFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  // dispatch(startLoading());
  // try {
  //   const payload = await handleFetchFeaturedFeedResponse();
  //   dispatch(featuredFeedSuccess(payload[0]));
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
    const response = await handleReturnFeedData(featuredFeedData);
    dispatch(featuredFeedSuccess(response.recipes[0]));
  } catch (e) {
    /**
     * FIXME: If there is an error from within handleReturnFeedData,
     * will it pass as a response or will it catch below?
     */
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }
};
