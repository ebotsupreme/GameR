import Config from 'react-native-config';

import { startLoading, hasError, recentFeedSuccess } from './index';
import { api } from '../../api/index';

/**
 *
 * @param {{}} dispatch
 */
export const handleFetchRecentFeed = async (dispatch) => {
  {
    /*dispatch(startLoading());
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
  } */
  }
};
