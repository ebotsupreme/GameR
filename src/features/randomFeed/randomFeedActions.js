import Config from 'react-native-config';

import { startLoading, hasError, randomFeedSuccess } from './index';
import { api } from '../../api/index';
import { handleReturnFeedData } from '../../utility/index';
import RandomRecipesFeedData from '../../json/random/randomRecipesFeed.json';

export const handleFetchRandomFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  dispatch(startLoading());
  try {
    // TODO: separate API calls
    const response = await api.get(
      `/recipes/complexSearch?apiKey=${Config.API}&sort=random&number=25`,
    );
    console.log('response.results', response.results);
    dispatch(randomFeedSuccess(response.results));
  } catch (e) {
    console.log('e: ', e);
    dispatch(hasError(e.message));
  }

  // dispatch(startLoading());
  // try {
  //   const response = await handleReturnFeedData(RandomRecipesFeedData);
  //   dispatch(randomFeedSuccess(response.results));
  // } catch (e) {
  //   console.log('error: ', e);
  //   dispatch(hasError(e.message));
  // }
};
