import { startLoading, hasError, randomFeedSuccess } from './index';
import { handleFetchRandomFeedResponse } from '../../api/randomFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import { randomFeed } from '../../json/random/index';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRandomFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  // dispatch(startLoading());
  // try {
  //   const payload = await handleFetchRandomFeedResponse();
  //   dispatch(randomFeedSuccess(payload));
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
    const response = await handleReturnFeedData(randomFeed);
    dispatch(randomFeedSuccess(response.results));
  } catch (e) {
    /**
     * FIXME: If there is an error from within handleReturnFeedData,
     * will it pass as a response or will it catch below?
     */
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }
};
