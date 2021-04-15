import { startLoading, hasError, healthyFeedSuccess } from './index';
import { handleFetchHealthyFeedResponse } from '../../api/healthyFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import { healthyFeed } from '../../json/healthy/index';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchHealthyFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  // dispatch(startLoading());
  // try {
  //   const payload = await handleFetchHealthyFeedResponse();
  //   dispatch(healthyFeedSuccess(payload));
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
    const response = await handleReturnFeedData(healthyFeed);
    dispatch(healthyFeedSuccess(response.results));
  } catch (e) {
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }
};
