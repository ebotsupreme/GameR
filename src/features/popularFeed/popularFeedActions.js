import Config from 'react-native-config';

import { startLoading, hasError, popularFeedSuccess } from './index';
import { api } from '../../api/index';
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
  {
    /*
  dispatch(startLoading());
  try {
    await api
      .get(
        `/recipes/complexSearch?apiKey=${Config.API}&sort=popularity&number=10`,
      )
      .then((response) => {
        console.log('response.data', response.data.results);
        dispatch(popularFeedSuccess(response.data.results));
      });
  } catch (e) {
    console.error(e.message);
    dispatch(hasError(e.message));
  }
*/
  }

  dispatch(startLoading());
  try {
    const response = await handleReturnFeedData(PopularRecipesFeedData);
    dispatch(popularFeedSuccess(response.results));
  } catch (e) {
    console.log('error', e);
    dispatch(hasError(e.message));
  }
};
