import Config from 'react-native-config';

import { startLoading, hasError, healthyFeedSuccess } from './index';
import { api } from '../../api/index';
import { handleReturnFeedData } from '../../utility/index';
import HealthyRecipesFeedData from '../../json/healthy/healthyRecipesFeedData.json';

export const handleFetchHealthyFeed = async (dispatch) => {
  /**
   *  NOTE: TEMPORARY DISABLED DUE TO API CALL LIMIT
   */
  {
    /*
  dispatch(startLoading());
  try {
    await api
      .get(
        `/recipes/complexSearch?apiKey=${Config.API}&sort=healthiness&number=10`,
      )
      .then((response) => {
        console.log('response.data.results', response.data.results);
        dispatch(healthyFeedSuccess(response.data.results));
      });
  } catch (e) {
    console.log('error:', e);
    dispatch(hasError(e.message));
  }
*/
  }

  dispatch(startLoading());
  try {
    const response = await handleReturnFeedData(HealthyRecipesFeedData);
    dispatch(healthyFeedSuccess(response.results));
  } catch (e) {
    console.log('error: ', e);
    dispatch(hasError(e.message));
  }
};