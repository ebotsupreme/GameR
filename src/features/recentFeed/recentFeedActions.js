import Config from 'react-native-config';

import { startLoading, hasError, recentFeedSuccess } from './index';
import { api } from '../../api/index';

// test data
import PopularRecipesFeedData from '../../json/popularRecipesFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRecentFeed = async (dispatch) => {
  {
    /*
    TEMPORARY DISABLED
    dispatch(startLoading());
  try {
    // await api.get('/users').then((response) => { // example
    await api
      .get(`/recipes/random?apiKey=${Config.API}&limitLicense=false&number=10`)
      .then((response) => {
        dispatch(recentFeedSuccess(response.data));
      });
  } catch (e) {
    console.error(e.message);
    dispatch(hasError(e.message));
  }
  */

    const fetchRecentTestFeed = new Promise((resolve, reject) => {
      dispatch(startLoading());

      setTimeout(() => {
        let data = PopularRecipesFeedData;
        if (data.length === 0) {
          reject('Error, feed empty');
        }
        resolve(data);
      }, 300);
    });

    fetchRecentTestFeed
      .then((data) => dispatch(recentFeedSuccess(data[0].recipes)))
      .catch((e) => dispatch(hasError(e.message)));
  }
};
