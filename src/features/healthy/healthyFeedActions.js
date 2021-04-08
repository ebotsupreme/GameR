import Config from 'react-native-config';

import { startLoading, hasError, healthyFeedSuccess } from './index';
import { api } from '../../api/index';

export const handleFetchHealthyFeed = async (dispatch) => {
  dispatch(startLoading());
  try {
    await api
      .get(
        `/recipes/complexSearch?apiKey=${Config.API}&sort=healthiness&number=10`,
      )
      .then((response) => {
        console.log('response.data');
        dispatch(healthyFeedSuccess(response.data));
      });
  } catch (e) {
    console.log('error:', e);
    dispatch(hasError(e.message));
  }
};
