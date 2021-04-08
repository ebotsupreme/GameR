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
    // await api.get('/users').then((response) => { // example
    await api
      .get(`/recipes/random?apiKey=${Config.API}&limitLicense=false&number=10`)
      .then((response) => {
        // console.log('response.data.recipes', response.data.recipes);
        dispatch(popularFeedSuccess(response.data.recipes));
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
    // console.log('response', response);
    dispatch(popularFeedSuccess(response[0].recipes));
  } catch (e) {
    console.log('error', e);
    dispatch(hasError(e.message));
  }
};
