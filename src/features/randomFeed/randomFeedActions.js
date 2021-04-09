import Config from 'react-native-config';

import { startLoading, hasError, randomFeedSuccess } from './index';
import { api } from '../../api/index';
import { handleFetchRandomFeedResponse } from '../../api/randomFeed/index';
import { handleReturnFeedData } from '../../utility/index';
import RandomRecipesFeedData from '../../json/random/randomRecipesFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRandomFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  {
    /*
  dispatch(startLoading());
  try {
    const payload = await handleFetchRandomFeedResponse();
    dispatch(randomFeedSuccess(payload));
  } catch (e) {
    console.log('e: ', e);
    dispatch(hasError(e.message));
  }
*/
  }

  dispatch(startLoading());
  try {
    const response = await handleReturnFeedData(RandomRecipesFeedData);
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