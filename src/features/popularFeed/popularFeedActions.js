import Config from 'react-native-config';

import { startLoading, hasError, popularFeedSuccess } from './index';
import { api } from '../../api/index';

// test data
import PopularRecipesFeedData from '../../json/popularRecipesFeed.json';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchPopularFeed = async (dispatch) => {
  // NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
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

  const fetchPopularTestFeed = new Promise((resolve, reject) => {
    dispatch(startLoading());

    setTimeout(() => {
      let data = PopularRecipesFeedData;
      if (data.length === 0) {
        reject('Error, feed empty');
      }
      resolve(data);
    }, 300);
  });

  fetchPopularTestFeed
    .then((data) => dispatch(popularFeedSuccess(data[0].recipes)))
    .catch((e) => dispatch(hasError(e.message)));
};
